//utils.ts
import { apiUrl } from "./api";
import { getGenresList } from "./api";
export function getGenreFromId(genreId: number, genres: { id: number; name: string }[] | null): string {
    if (!genres) return 'Unknown Genre'; // Fallback for null genres list
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : 'Unknown Genre'; // Fallback for missing genre ID
  }
  

  export async function addCategoryFilter(category: string): Promise<string> {
    const genresList = await getCachedGenresList();
  
    const categoryId = genresList.find((genre) => genre.name === category)?.id;
    const url = apiUrl + (categoryId ? `&with_genres=${categoryId}` : '');
  
    return url;
  }
  


  let cachedGenresList: { id: number; name: string }[] | null = null;
  let fetchingGenresList: Promise<{ id: number; name: string }[]> | null = null;
  
  export async function getCachedGenresList(): Promise<{ id: number; name: string }[]> {
    if (cachedGenresList) return cachedGenresList;
  
    if (fetchingGenresList) return await fetchingGenresList;
  
    fetchingGenresList = (async () => {
      let genresList = JSON.parse(localStorage.getItem("genresList") || "null");
      if (!genresList) {
        genresList = await getGenresList();
        localStorage.setItem("genresList", JSON.stringify(genresList));
      }
      cachedGenresList = genresList;
      fetchingGenresList = null; // Clear the fetching promise after completion
      return genresList;
    })();
  
    return await fetchingGenresList;
  }
  