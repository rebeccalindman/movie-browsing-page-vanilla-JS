//api.ts
import { Movie, MovieData, CastMember } from "./types.ts";
export const API_KEY_tmdb = "6369fcc46c83ecd475d3f734321f2a0b"; //themoviedb.org

export const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_tmdb}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

export const apiFeaturedMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_tmdb}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_providers=netflix%20OR%20prime%20OR%20svt&year=2024`;


/**
 ** Fetch movies from The Movie Database API.
 */

 import { getCachedGenresList } from './utils.ts';

 export async function fetchMovies(url: string): Promise<MovieData | null> {
  try {
    const genresList = await getCachedGenresList();

    const response = await fetch(url);

    if (!response.ok) {
      displayErrorMessage(response.status);
      return null;
    }

    const json = await response.json();

    // Map movies and fetch cast information asynchronously
    const movies: MovieData = await Promise.all(
      json.results.map(async (movie: any) => ({
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        id: movie.id,
        love: movie.love || false,
        vote_average: Number(movie.vote_average).toFixed(1), // Convert to one decimal
        vote_count: movie.vote_count,
        genres: movie.genre_ids.map((genreId: number) => {
          const genre = genresList.find((g) => g.id === genreId);
          return genre ? { id: genre.id, name: genre.name } : { id: genreId, name: 'Unknown Genre' };
        }),
        cast: (await getCastInformationForMovie(movie.id)) || [], // Default to empty array if cast fetch fails
      }))
    );

    return movies;
  } catch (error) {
    console.error('Error during fetchMovies execution:', error);
    displayErrorMessage(0);
    return null;
  }
}

async function getCastInformationForMovie(movieId: number): Promise<CastMember[] | null> {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY_tmdb}&language=en-US`;

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Error fetching cast information for movie ID ${movieId}:`, response.status);
      return null;
    }

    const data = await response.json();
    const placeholderImageUrl = "https://via.placeholder.com/500x750?text=No+Image";


    // Map cast members
    return data.cast.map((castMember: any) => ({
      id: castMember.id,
      name: castMember.name,
      character: castMember.character,
      profile_path: castMember.profile_path
      ? `${imageBaseUrl}${castMember.profile_path}`
      : placeholderImageUrl, // Use placeholder for missing profile pictures
      cast_id: castMember.cast_id,
      gender: castMember.gender,
      order: castMember.order,
    }));
  } catch (error) {
    console.error(`Error fetching cast information for movie ID ${movieId}:`, error);
    return null;
  }
}
 



/**
 ** Display an error message based on the HTTP status code.
 * (Recycled from Boiler Room w 47)
 */
export function displayErrorMessage(statusCode: number): void {
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");

  switch (statusCode) {
    case 400:
      errorMessage.textContent = "Oops! Something went wrong with your request. An error has been sent to our IT. Please try again later.";
      console.error("Invalid request (400). Check your URL.");
      break;
    case 401:
      errorMessage.textContent = "Access denied. Please try again later and contact support if the issue persists.";
      console.error("Unauthorized access (401). Invalid API key.");
      break;
    case 404:
      errorMessage.textContent = "Oops! We couldn't find what you're looking for. Check your request and please try again later.";
      console.error("Resource not found (404).");
      break;
    case 429:
      errorMessage.textContent = "You're making too many requests! Please wait a while before trying again.";
      console.error("Too many requests (429). Your request count (#) is over the allowed limit of (40).");
      break;
    case 500:
      errorMessage.textContent = "Something went wrong on our end. An error has been sent to our IT. Please try again later.";
      console.error("Internal error (500): Something went wrong, contact TMDB.");
      break;
    case 503:
      errorMessage.textContent = "We are sorry! This service is temporarily offline, try again later.";
      console.error("Service offline (503). This service is temporarily offline.");
      break;
    default:
      errorMessage.textContent = "Oopsie! An unexpected error occurred. Please try again.";
      console.error(`Unexpected error (${statusCode}).`);
      break;
  }

  document.body.innerHTML = "";
  document.body.appendChild(errorMessage);
}

export function storeDataArray(data: Array<any> | MovieData[] | null, key: string): void {
  localStorage.setItem(key, JSON.stringify(data));
}


export async function getGenresList(): Promise<{ id: number; name: string }[] | null> {
  const url = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY_tmdb}`;

  try {
    const response = await fetch(url);
    const json = await response.json();
    storeDataArray(json.genres, "genresList");

    return json.genres || []; // Extract genres array
  } catch (error) {
    console.error('Error fetching genres:', error);
    return null; // Return null on error
  }
}


