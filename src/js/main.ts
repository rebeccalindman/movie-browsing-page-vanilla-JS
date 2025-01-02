//main.ts
import { Movie, MovieData } from "./types.ts";
import { fetchMovies, apiUrl, storeDataArray } from './api.ts';
import { displayUserMessage } from "./dom.ts";
import { createMovieModal } from './modal.ts';
import { addCategoryFilter, getGenreFromId, getCachedGenresList, syncLovePropertyAcrossStoredArrays, toggleFavorite, isFavorite, getFavoriteMovies, scrollToBottom } from "./utils.ts";  

const mainElement = document.querySelector('main');

document.addEventListener("DOMContentLoaded", async () => {
  const contactNavButton = document.getElementById("contact-nav-button");
  if (contactNavButton) {
    contactNavButton.addEventListener("click", async () => {
      await main(); // Ensure main() completes before scrolling
      scrollToBottom();
    });
  }

  const homeLogo = document.getElementById("logo");
  if (homeLogo) {
    homeLogo.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  const hamburgerButton = document.getElementById("hamburger-button");
  if (hamburgerButton) {
    hamburgerButton.addEventListener("click", () => {
      hamburgerButton.classList.toggle("active");
      const hamburgerMenu = document.getElementById("hamburger-menu");
      if (hamburgerMenu) {
        hamburgerMenu.classList.toggle("open");
        hamburgerMenu.classList.toggle("close");
      }
    });
  }

  if (window.location.pathname === "/index.html") {
    await main(); // Ensure dynamic content is fully rendered
  }

  if (window.location.pathname === "/savedmovies.html") {
    await savedMoviesMain(); // Ensure saved movies are fully loaded
  }
});

async function main(): Promise<void> {
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
    await Promise.all(categories.map((category) => fetchAndDisplayCategoryMovies(category)));
  } catch (error) {
    console.error("Error during main execution:", error);
  }
}

async function savedMoviesMain(): Promise<void> {
  const favoriteMovies = await getFavoriteMovies();
  if (favoriteMovies && favoriteMovies.length > 0) {
    displayMovieCards(favoriteMovies, "saved");
  }
  else {
    displayUserMessage(`No favorite movies found.`, ` Go back to the home page and add some favorites!`);
    console.log("No favorite movies found.");
  }
}

// Render Movie Card
export function renderMovieCard(movie: Movie, category: string): void {
  const movieCardContainer = document.getElementById(`${category} movies`) as HTMLAreaElement;
  const movieCard = document.createElement("article");
  movieCard.classList.add("movie-card");

  // Check if the movie is a favorite
  const isFavorited = isFavorite(movie.id);
  const favoriteClass = isFavorited ? "loved" : "";

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
        <p class="movie-card-genres">${movie.genres.map((genre) => genre.name).join(", ")}</p>
        <p class="movie-card-release-date">${movie.release_date}</p>
        <p class="cto-view-details">View Details</p>
      </div>
    </div>
  `;

  movieCardContainer.appendChild(movieCard);

  // Attach click event to view details for the entire card
  movieCard.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".love-button")) {
      createMovieModal(movie);
    }
  });

  // Attach click event to toggle favorite
  const loveButton = movieCard.querySelector(".love-button");
  if (!loveButton) {
    throw new Error("Love button not found");
  }
  loveButton.addEventListener("click", () => {
    toggleFavorite(movie);

    // Select all buttons with the same movie ID
    const loveButtons = document.querySelectorAll(`.love-button[data-movie-id="${movie.id}"]`);
    loveButtons.forEach((button) => button.classList.toggle("loved"));
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
      if (movie.genres) {
        movie.genres = movie.genres.map(({id}) => ({
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





   
  

