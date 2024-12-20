const API_KEY_tmdb = "6369fcc46c83ecd475d3f734321f2a0b"; //themoviedb.org

export const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_tmdb}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;


export type Movie = {
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  id: number;
  love?: boolean;
  vote_average?: number;
  vote_count?: number;
  genres: { id: number; name: string }[];
  cast: Cast[];
};

export type Cast = {
  profile_path: string;
  name: string;
}

export interface MovieData {
  results: Movie[] | null;
  // other properties...
}



//api search



// fetch data from the api
// let getMovies = async(url) => {   
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// getMovies(searchUrl).then(data => console.log(data));

/**
 ** Fetch movies from The Movie Database API.
 */
export async function fetchMovies(url:string): Promise<MovieData | null> {
  try {
    const response = await fetch(url);

    // Handle HTTP response errors
    if (!response.ok) {
      displayErrorMessage(response.status);

      return null;
    }

    const data = await response.json();
    storeMovieData(data);

    return data;
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
const displayErrorMessage = (statusCode: number) => {
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");

  switch (statusCode) {
    case 400:
      errorMessage.textContent = "Oops! Something went wrong with your request. An error has been sent to our IT. Please try again later.";
      console.error("Invalid request (400). Check your URL.");
      break;

    case 401:
      errorMessage.textContent = "Access denied. Please try again later and contact the support if the issue persists.";
      console.error("Unauthorized access (401). Invalid API key.");
      break;

    case 404:
      errorMessage.textContent = "Oops! We couldn't find what you're looking for. Check your request and please try again later."; //todo add alternative link for redirection
      console.error("Resource not found (404).");
      break;

    case 429:
      errorMessage.textContent = "You're making too many requests! Please wait a while before trying again.";
      console.error("Too many requests (429). Your request count (#) is over the allowed limit of (40)."); //todo add requestcounter ??
      break;

    case 500:
      errorMessage.textContent = "Something went wrong on our end. An error has been sent to our IT. Please try again later.";
      console.error("Internal error (500): Something went wrong, contact TMDB.");
      break;

    case 503: 
    errorMessage.textContent = "We are sorry! This service is temporarily offline, try again later.";
    console.error("Service offline (503). This service is temporarily offline.")

    default:
      errorMessage.textContent = "Oopsie! An unexpected error occurred. Please try again.";
      console.error(`Unexpected error (${statusCode}).`);
      break;
  }

  document.body.innerHTML = ""; // Clear existing news items
  document.body.appendChild(errorMessage); // Display error message to the user
};

function storeMovieData(data: MovieData) {
  localStorage.setItem('movieData', JSON.stringify(data));
}


