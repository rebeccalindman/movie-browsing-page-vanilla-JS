//utils.ts
import { apiUrl, getGenresList } from "./api.ts";
import { Movie } from "./types.ts";
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
  
  let lovedMoviesArr: Movie[] = JSON.parse(localStorage.getItem("lovedMoviesArr") || "[]");

/**
 * Toggle a movie as a favorite. If it's already a favorite, it will be removed. Otherwise, it will be added.
 */
export function toggleFavorite(movie: Movie): void {
    const movieIndex = lovedMoviesArr.findIndex((m) => m.id === movie.id);
  
    if (movieIndex !== -1) {
      // If movie is already a favorite, remove it
      lovedMoviesArr.splice(movieIndex, 1);
    } else {
      // Otherwise, add it as a favorite
      movie.love = true;
      lovedMoviesArr.push(movie);
    }
  
    // Update local storage for the favorites list
    localStorage.setItem("lovedMoviesArr", JSON.stringify(lovedMoviesArr));
  
    // Sync love property across all stored arrays
    syncLovePropertyAcrossStoredArrays();
  }
  

/**
 * Check if a movie is marked as favorite.
 */
export function isFavorite(movieId: number): boolean {
  return lovedMoviesArr.some((movie) => movie.id === movieId);
}

/**
 * Get the current list of favorite movies.
 */
export function getFavoriteMovies(): Movie[] {
  return lovedMoviesArr;
}

/**
 * Sync the local storage and the in-memory `lovedMoviesArr` in case of external changes.
 */
/* export function storeDataArray(data: Movie[], key: string): void {
    console.log(`Storing data for key: ${key}, Length: ${data.length}`);
    localStorage.setItem(key, JSON.stringify(data));
  } */
  
  export function syncLovePropertyAcrossStoredArrays(): void {
    // Get the favorite movies list
    const lovedMoviesArr: Movie[] = JSON.parse(localStorage.getItem("lovedMoviesArr") || "[]");
  
    // Dynamically fetch all stored array keys
    const storedKeys = Object.keys(localStorage).filter((key) => key.endsWith("movies"));
  
    storedKeys.forEach((arrayKey) => {
      const array = JSON.parse(localStorage.getItem(arrayKey) || "[]");
  
      const updatedArray = array.map((movie: Movie) => {
        const isLoved = lovedMoviesArr.some((favMovie) => favMovie.id === movie.id);
        return { ...movie, love: isLoved }; // Ensure the love property is synced
      });
  
      // Save the updated array back to local storage
      localStorage.setItem(arrayKey, JSON.stringify(updatedArray));
    });
  
    console.log("Love properties synced across stored arrays.");
  }
  
  
  