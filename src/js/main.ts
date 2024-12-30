//main.ts
import { Movie, MovieData } from "./types.ts";
import { fetchMovies, apiUrl, apiFeaturedMoviesUrl, displayErrorMessage, storeDataArray, getGenresList } from './api.ts';
import { createMovieModal } from './modal.ts';
import { addCategoryFilter, getGenreFromId, getCachedGenresList, syncLovePropertyAcrossStoredArrays, toggleFavorite, isFavorite, getFavoriteMovies } from "./utils.ts";  

const mainElement = document.querySelector('main');

// Mock Movie Data
const mockMovie: Movie = {
  title: "EXAMPLE: The Shawshank Redemption",
  overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  backdrop_path: "/5KvYhSZuRzrcXzWjVO4J3q4b2qU.jpg",
  poster_path: "/q6y0Go1tsGEsmtFryIEreULOSLp.jpg",
  release_date: "1994-09-23",
  id: 1,
  love: false,
  vote_average: 9.2,
  vote_count: 2500,
  genres: [
    { id: 1, name: "Drama" }
  ],
  cast: [
    { profile_path: "#", name: "Tim Robbins" },
    { profile_path: "#", name: "Morgan Freeman" }
  ],
};

document.addEventListener('DOMContentLoaded', () => {
  const contactNavButton = document.getElementById('contact-nav-button');
  if (contactNavButton) {
    contactNavButton.addEventListener('click', () => {
      scrollToBottom();
    });
  }

  
  if (window.location.pathname === '/index.html') {
    main();
  }

  if (window.location.pathname === '/savedmovies.html') {
    savedMoviesMain();
  }

  const homeLogo = document.getElementById('logo');
  if (homeLogo) {
    homeLogo.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
  

});
async function main() {
  try {
    // Fetch genres and sync love property on page load
    await getCachedGenresList();

    syncLovePropertyAcrossStoredArrays(); 

    // Fetch and display featured movies
    const featuredMovies = await fetchMovies(apiUrl);
    if (featuredMovies && featuredMovies.length > 0) {
      storeDataArray(featuredMovies, "featuredMovies");
      syncLovePropertyAcrossStoredArrays();
      displayMovieCards(featuredMovies, "featured");
    }

    // Fetch and display category movies
    const categories = ["Action", "Adventure", "Comedy", "Drama", "Horror", "Romance", "Thriller"];


    categories.forEach((category) => fetchAndDisplayCategoryMovies(category));
    
  } catch (error) {
    console.error("Error during main execution:", error);
  }
}

async function savedMoviesMain() {
  const favoriteMovies = await getFavoriteMovies();

  if (favoriteMovies && favoriteMovies.length > 0) {
    displayMovieCards(favoriteMovies, "saved");
  }

}


export function renderMovieCard(movie: Movie, category: string) {
  const movieCardContainer = document.getElementById(`${category} movies`) as HTMLAreaElement;
  const movieCard = document.createElement('article');
  movieCard.classList.add('movie-card');

  // Check if the movie is a favorite
  const isFavorited = isFavorite(movie.id);
  const favoriteClass = isFavorited ? 'loved' : '';

  movieCard.innerHTML = `
    <div class="movie-card-content">
      <button class="love-button ${favoriteClass}" data-movie-id="${movie.id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" fill="white" fill-opacity="0.4"/>
          </svg>
      </button>
      <img class="movie-card-poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
      <h3 class="movie-card-title">${movie.title}</h3>
      <div class="movie-card-information-container">
        <p class="movie-card-genres">${movie.genres.map(genre => genre.name).join(', ')}</p>
        <p class="movie-card-release-date">${movie.release_date}</p>
        <p class="cto-view-details">View Details</p>
      </div>
    </div>
  `;

  movieCardContainer.appendChild(movieCard);

  // Attach click event to toggle favorite
  const loveButton = movieCard.querySelector('.love-button');
  loveButton.addEventListener('click', () => {
    toggleFavorite(movie);

    // Select all buttons with the same movie ID
    const loveButtons = document.querySelectorAll(`.love-button[data-movie-id="${movie.id}"]`);
    loveButtons.forEach(button => button.classList.toggle('loved'));

   /*  // Re-run main function
    main(); */


  });
}

export function displayMovieCards(movies: MovieData, category: string) {
  try {
    movies.forEach(movie => {
      renderMovieCard(movie, category);
  });
    
  } catch (error) {
    console.error('An error occurred while displaying the movie cards:', error);
  }
  finally {
    console.log('Movie cards displayed successfully.');
}
}




export async function fetchAndDisplayCategoryMovies(category: string) {
  try {
    const genresList = await getCachedGenresList();

    const categoryUrl = await addCategoryFilter(category);
    console.log(`Fetching movies for category: ${category}, URL: ${categoryUrl}`);

    const categoryMovies = await fetchMovies(categoryUrl);
    if (!categoryMovies || categoryMovies.length === 0) {
      console.error(`No movies found for category: ${category}`);
      return;
    }

    // Sync genres for the movies
    categoryMovies.forEach((movie) => {
      if (movie.genre_ids) {
        movie.genres = movie.genre_ids.map((id: number) => ({
          id,
          name: getGenreFromId(id, genresList),
        }));
      }
    });

    // Save the fetched movies to local storage
    storeDataArray(categoryMovies, `${category} movies`);

    // Sync love property
    syncLovePropertyAcrossStoredArrays();

    createCategorySection(category);
    displayMovieCards(categoryMovies, category);
  } catch (error) {
    console.error(`An error occurred while fetching movies for category: ${category}`, error);
  } finally {
    console.log(`Movies fetched and displayed for category: ${category}`);
  }
}



export function createCategorySection(category: string) {
  if (document.getElementById(`${category} movies`)) {
    console.warn(`Category section for '${category}' already exists.`);
    return; // Avoid duplicate sections
  }

  const section = document.createElement('section');
  section.classList.add('section-header');
  section.innerHTML = `
    <h2>${category}</h2>
    <p>Click on a movie card to view more details and find a streaming site.</p>
  `;

  if (!mainElement) {
    console.error("Error: 'main' element not found in the DOM.");
    return;
  }

  mainElement.appendChild(section);

  const topMoviesCategoryWrapper = document.createElement('section');
  topMoviesCategoryWrapper.classList.add('movie-cards-wrapper');
  topMoviesCategoryWrapper.innerHTML = `
    <div class="movie-card-scroll-container"> 
      <div class="movie-card-container" id="${category} movies">
      </div>
    </div>
  `;

  mainElement.appendChild(topMoviesCategoryWrapper);
}





   
  

