//main.ts
import { Movie, MovieData } from "./types.ts";
import { fetchMovies, apiUrl, storeDataArray, API_KEY_tmdb } from './api.ts';
import { displayUserMessage } from "./dom.ts";
import { createMovieModal } from './modal.ts';
import { addCategoryFilter, getGenreFromId, getCachedGenresList, syncLovePropertyAcrossStoredArrays, toggleFavorite, isFavorite, getFavoriteMovies, scrollToBottom, scrollToTop} from "./utils.ts";  

const mainElement = document.querySelector('main');

const lazyLoad = () => {
  const lazyImages = document.querySelectorAll<HTMLImageElement>("img.lazy");

  const loadImg = (img: HTMLImageElement) => {
    img.src = img.dataset.src || '';
    img.classList.remove("lazy");
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          loadImg(img);
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => observer.observe(img));
  } else {
    // Fallback for older browsers
    lazyImages.forEach(loadImg);
  }
};

document.addEventListener("DOMContentLoaded", lazyLoad);

document.addEventListener("DOMContentLoaded", async () => {
  const contactNavButton = document.getElementById("contact-nav-button");
  const contactNavButton2 = document.getElementById("contact-nav-button2");
  const searchIconButton = document.getElementById("search-icon-button");

  if (contactNavButton) {
    contactNavButton.addEventListener("click", async () => {
      await main(); // Ensure main() completes before scrolling
      
      scrollToBottom();
    });
  }

  if (contactNavButton2) {
    contactNavButton2.addEventListener("click", async () => {
      await main(); // Ensure main() completes before scrolling
      
      scrollToBottom();
      
    });
  }

  if (searchIconButton) {
    searchIconButton.addEventListener("click", () => {
      const searchBarContainer = document.getElementById("search-bar-container");
      if (searchBarContainer) {
        console.log("Search bar container found");
        
        searchBarContainer.classList.toggle("active");
        
        /* add margin to main element */
        if (mainElement) {
          mainElement.style.marginTop = mainElement.style.marginTop === "130px" ? "" : "130px";

        }
      }
      
    })
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

  if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
    await main(); // Ensure dynamic content is fully rendered
  }

  if (window.location.pathname === "/savedmovies.html") {
    await savedMoviesMain(); // Ensure saved movies are fully loaded
  }

  // Initialize the search functionality
  handleMovieSearch();
});

async function main(): Promise<void> {
  try {
    // Fetch genres and sync love property on page load
    const genresList: { id: number; name: string }[] = await getCachedGenresList();
    syncLovePropertyAcrossStoredArrays();

    // Fetch and display featured movies
    const featuredMovies: MovieData = await fetchMovies(apiUrl);
    if (featuredMovies && featuredMovies.length > 0) {
      storeDataArray(featuredMovies, "featuredMovies");
      displayMovieCards(featuredMovies, "featured");
    }

    // Fetch and display new Swedish movies
    const swedishMovies: MovieData = await fetchMovies(`${apiUrl}&with_origin_country=SE&with_original_language=sv`);

    if (swedishMovies && swedishMovies.length > 0) {
      const categoryName = "Discover Swedish Productions";
      storeDataArray(swedishMovies, "swedishMovies");
      createCategorySection(categoryName);
      displayMovieCards(swedishMovies, categoryName);
    }

    // Fetch and display API category movies
    const categories: string[] = genresList.map((genre) => genre.name);
    await Promise.all(categories.map((category) => fetchAndDisplayCategoryMovies(category)));
  } catch (error) {
    console.error("Error during main execution:", error);
  }
}

async function savedMoviesMain(): Promise<void> {
  const favoriteMovies: MovieData = await getFavoriteMovies();
  if (favoriteMovies && favoriteMovies.length > 0) {
    displayMovieCards(favoriteMovies, "saved");
  }
  else {
    displayUserMessage(`No favorite movies found.`, ` Go back to the home page and add some favorites!`, "To Home Page", "/index.html");
    console.log("No favorite movies found.");
  }
}

// Render Movie Card
export function renderMovieCard(movie: Movie, category: string): void {
  const movieCardContainer = document.getElementById(`${category} movies`) as HTMLDivElement | null;

  if (!movieCardContainer) {
    console.error(`Error: Movie card container for category '${category}' not found.`);
    return; // Prevent rendering if the container is missing
  }

  if (!movie.poster_path || movie.poster_path === "") {
   /*  console.log(`No poster path for movie '${movie.title}'. Skipping display.`); */
    return; // Prevent rendering if poster path is missing
  }

  if (!movie.providers || movie.providers === null) { // only display if providers exist
    /* console.log(`No providers for movie '${movie.title}'. Skipping display.`); */
    
    return; // Prevent rendering if providers are missing
  }

  const movieCard = document.createElement("article");
  movieCard.classList.add("movie-card");

  // Check if the movie is a favorite
  const isFavorited = isFavorite(movie.id);
  const favoriteClass = isFavorited ? "loved" : "";

  movieCard.innerHTML = `
    <div class="movie-card-content">
      <button class="love-button ${favoriteClass}" aria-label="Add to favorites" data-movie-id="${movie.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" fill="white" fill-opacity="0.4"/>
        </svg>
      </button>
      <img class="movie-card-poster lazy" src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} poster">
      <div class="movie-card-title"><h3>${movie.title}</h3></div>
      <div class="movie-card-information-container">
        <p class="movie-card-genres">${movie.genres.map((genre) => genre.name).join(", ")}</p>
        <p class="movie-card-release-date">${movie.release_date}</p>
        <p class="cto-view-details">View Details</p>
      </div>
    </div>
  `;

  movieCardContainer.appendChild(movieCard);

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

  // Attach click event to view details
  movieCard.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".love-button")) {
      createMovieModal(movie);
    }
  });
}


export function displayMovieCards(movies: MovieData, category: string) {
  try {
    if (!movies || movies.length === 0) {
      throw new Error("No movies found");
    }
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


export async function fetchAndDisplayCategoryMovies(category: string): Promise<void> {
  try {
    const genresList = await getCachedGenresList();
    const categoryUrl = await addCategoryFilter(category);

    const categoryMovies = await fetchMovies(categoryUrl);
    if (!categoryMovies || categoryMovies.length === 0) {
      console.error(`No movies found for category: ${category}`);
      return;
    }

    // Sync genres for the movies
    categoryMovies.forEach((movie) => {
      if (movie.genres) {
        movie.genres = movie.genres.map(({ id }) => ({
          id,
          name: getGenreFromId(id, genresList),
        }));
      }
    });

    // Ensure the category section exists before displaying cards
    createCategorySection(category);

    // Save the fetched movies to local storage
    storeDataArray(categoryMovies, `${category} movies`);

    // Sync love property
    syncLovePropertyAcrossStoredArrays();

    displayMovieCards(categoryMovies, category);
  } catch (error) {
    console.error(`An error occurred while fetching movies for category: ${category}`, error);
  } finally {
    console.log(`Movies fetched and displayed for category: ${category}`);
  }
}


export function createCategorySection(category: string): void {
  const existingSection = document.getElementById(`${category} movies`);
  if (existingSection) {
    console.warn(`Category section for '${category}' already exists.`);
    return; // Avoid duplicate sections
  }

  const section = document.createElement("section");
  section.classList.add("section-header");
  section.innerHTML = `
    <h2>${category}</h2>
    <p>Click on a movie card to view more details and find a streaming site.</p>
  `;

  const movieCardsWrapper = document.createElement("section");
  movieCardsWrapper.classList.add("movie-cards-wrapper");
  movieCardsWrapper.innerHTML = `
    <div class="movie-card-scroll-container">
      <div class="movie-card-container" id="${category} movies"></div>
    </div>
  `;

  if (mainElement) {
    mainElement.appendChild(section);
    mainElement.appendChild(movieCardsWrapper);
  } else {
    console.error("Error: 'main' element not found in the DOM.");
  }
}



function handleMovieSearch() {
  const searchInput = document.getElementById("searchInput") as HTMLInputElement | null;
  const searchButton = document.getElementById("search-button");

  if (!searchInput || !searchButton) {
    console.error("Search input, button, or container not found.");
    return;
  }


  const fetchAndDisplayMovies = async (query: string) => {
    if (query.trim().length < 2) {
      displayUserMessage(
        "Search query too short.",
        "Please enter at least 2 characters for your search!"
      );
      return;
    }

    

    const apiSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_tmdb}&query=${encodeURIComponent(query)}`;

    try {
      await createSearchResultContainer(query);
      const searchResultsContainer = document.getElementById('searchResult movies');

      localStorage.setItem("searchQuery", query);

      const searchResult = await fetchMovies(apiSearchUrl);

      // Clear previous search results
      if (searchResultsContainer) {
        searchResultsContainer.innerHTML = "";
      }

      if (searchResult && searchResult.length > 0) {
        storeDataArray(searchResult, "searchResult");
        displayMovieCards(searchResult, "searchResult");

        scrollToTop();

        const numberOfValidResults: number = searchResult.filter(movie => movie.poster_path).length;

        /* Update section header with search details */
        const sectionHeader = document.querySelector(".section-header");
        if (sectionHeader) {
          sectionHeader.innerHTML = `
          <h2>Search Results for "${query}" (${numberOfValidResults} results)</h2>
          <p>Click on a movie card to view more details and find a streaming site.</p>
        `;
        }


      } else {
        displayUserMessage(
          `No results found for "${query}".`,
          "Try a different keyword or check the spelling!"
        );
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      displayUserMessage(
        "An error occurred during the search.",
        "Please try again later!"
      );
    }
  };

  let searchTimeout: number | null = null;
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim();
      if (query.length >= 3) {
        if (searchTimeout) clearTimeout(searchTimeout);
        searchTimeout = window.setTimeout(() => fetchAndDisplayMovies(query), 1000); // 1 second delay to reduce API requests
      }
    });
  }

  // Handle Enter key
  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const query = searchInput.value.trim();
        fetchAndDisplayMovies(query);
      }
    });
  }

  // Handle Search Button
  if (searchButton) {
    searchButton.addEventListener("click", () => {
      if (searchInput) {
        const query = searchInput.value.trim();
        fetchAndDisplayMovies(query);
      }
    });
  }

}

async function createSearchResultContainer(query: string): Promise<void> {
  const existingContainer = document.getElementById('searchResult movies');
  if (existingContainer) {
    console.log("Search results section already exists.");
    return;
  }

  /* create seaction header */
  const sectionHeader = document.createElement("section");
  sectionHeader.classList.add("section-header");
  sectionHeader.innerHTML = `
    <h2>Search Results for "${query}"</h2>
    <p>Click on a movie card to view more details and find a streaming site.</p>
  `;

  const mainElement = document.querySelector("main");
  if (!mainElement) {
    console.error("Main element not found.");
    return;
  }

  const searchResultsContainer = document.createElement("section");
  searchResultsContainer.classList.add("movie-cards-wrapper");
  searchResultsContainer.innerHTML = `
    <div class="movie-card-scroll-container">
      <div class="movie-card-container" id="searchResult movies">
        <!-- Search results will appear here -->
      </div>
    </div>
  `;

  mainElement.insertBefore(searchResultsContainer, mainElement.firstChild);
  mainElement.insertBefore(sectionHeader, mainElement.firstChild);
  console.log("Search results section created.");

  return;
}

