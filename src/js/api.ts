//api.ts
import { Movie, MovieData } from "./types.ts";
export const API_KEY_tmdb = "6369fcc46c83ecd475d3f734321f2a0b"; //themoviedb.org

export const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_tmdb}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;





/**
 ** Fetch movies from The Movie Database API.
 */
export async function fetchMovies(url: string): Promise<MovieData | null> {
  try {
    const response = await fetch(url);

    // Handle HTTP response errors
    if (!response.ok) {
      displayErrorMessage(response.status);
      return null;
    }

    const json = await response.json();
    const movies: MovieData = json.results.map((movie: Movie) => ({
      title: movie.title,
      overview: movie.overview,
      backdrop_path: movie.backdrop_path,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      id: movie.id,
      love: movie.love || false,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      genres: movie.genres,
      cast: movie.cast
    }));

    storeMovieData(movies);

    return movies;
  } catch (error) {
    // Log any fetch or parsing errors
    console.error("Error during fetchMovies execution:", error);

    // Show a generic error message to the user
    displayErrorMessage(0);

    return null;
  }
}

/**
 ** Display an error message based on the HTTP status code.
 * (Recycled from Boiler Room w 47)
 */
function displayErrorMessage(statusCode: number): void {
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

function storeMovieData(data: MovieData) {
  localStorage.setItem('movieData', JSON.stringify(data));
}


