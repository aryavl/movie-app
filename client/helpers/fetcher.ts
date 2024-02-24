import { API_KEY, baseURL } from "./constants"

export const getGenreList=async()=>{
    const response = await fetch(`${baseURL}/genre/movie/list?api_key=${API_KEY}&language=en`)
    if (!response.ok) {
        throw new Error(`Failed to fetch user list. Status: ${response.status}`);
      }
      const result = await response.json();
    
      return result;
}