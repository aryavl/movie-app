import { API_KEY, baseURL } from "./constants"

export const getGenreList=async()=>{
    const response = await fetch(`${baseURL}/genre/movie/list?api_key=${API_KEY}&language=en`)
    if (!response.ok) {
        throw new Error(`Failed to fetch user list. Status: ${response.status}`);
      }
      const result = await response.json();
     const genres = result.genres
    //  fetch movies for each genre

    const genreWithMovies = await Promise.all(genres.map(async(genre:any)=>{
        const movieResponse = await fetch(`${baseURL}/discover/movie?api_key=${API_KEY}&language=en&with_genres=${genre.id}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=1&vote_count.gte=1000`)

        const movieData = await movieResponse.json()
         genre.movies= movieData.results.slice(0,4)
        return genre
    }))
      return genreWithMovies
}