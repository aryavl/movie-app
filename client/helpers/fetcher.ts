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

export const getUpcomingMovies=async()=>{
    const response = await fetch(
        `${baseURL}/movie/upcoming?api_key=${API_KEY}&language=en&page=1`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch upcoming movies. Status: ${response.status}`
        );
      }
      const data = await response.json();
      return data.results;
    
}

export const getLatestMovies= async()=>{
    const response = await fetch(
        `${baseURL}/movie/now_playing?api_key=${API_KEY}&language=en&page=1`
    );
    if (!response.ok) {
        throw new Error(
            `Failed to fetch latest movies. Status: ${response.status}`
        );
    }
    const data = await response.json();
    return data.results;
}
export const getPopularMovies= async()=>{
    const response = await fetch(
        `${baseURL}/movie/popular?api_key=${API_KEY}&language=en&page=1`
    );
    if (!response.ok) {
        throw new Error(
            `Failed to fetch latest movies. Status: ${response.status}`
        );
    }
    const data = await response.json();
    return data.results;
}
export const getTopRatedMovies= async()=>{
    const response = await fetch(
        `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en&page=1`
    );
    if (!response.ok) {
        throw new Error(
            `Failed to fetch latest movies. Status: ${response.status}`
        );
    }
    const data = await response.json();
    return data.results;
}
export const getSingleMovieDetails= async(id:number|string)=>{
    const response = await fetch(
        `${baseURL}/movie/${id}?api_key=${API_KEY}&language=en`
    );
    if (!response.ok) {
        throw new Error(
            `Failed to fetch latest movies. Status: ${response.status}`
        );
    }
    const data = await response.json();
    const credits = await fetch(`${baseURL}/movie/${id}/credits?api_key=${API_KEY}&language=en`)
    if (!credits.ok) {
        throw new Error(
            `Failed to fetch latest movies. Status: ${credits.status}`
        );
    }
    const creditsData = await credits.json();
    const review = await fetch(`${baseURL}/movie/${id}/reviews?api_key=${API_KEY}&language=en&page=1`)
    if (!review.ok) {
        throw new Error(
            `Failed to fetch latest movies. Status: ${review.status}`
        );
    }
    const reviewData = await review.json();

    return {data:data,credits:creditsData,reviews:reviewData.results};
}

