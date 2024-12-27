//main.ts
import { Movie, MovieData } from "./types.ts";
import { fetchMovies, apiUrl, apiFeaturedMoviesUrl, displayErrorMessage, storeDataArray, getGenresList } from './api.ts';
import { displayMovieCards, fetchAndDisplayCategoryMovies } from './dom.ts';
import { createMovieModal } from './modal.ts';
import { addCategoryFilter, getGenreFromId, getCachedGenresList, syncLovePropertyAcrossStoredArrays } from "./utils.ts";  

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

  
  main();
  

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
      displayMovieCards(featuredMovies, "featured");
    }

    // Fetch and display category movies
    const categories = ["Action", "Adventure", "Comedy", "Drama", "Horror", "Romance", "Thriller"];


    categories.forEach((category) => fetchAndDisplayCategoryMovies(category));

    // Example of rendering a modal with mock data
    createMovieModal(mockMovie);
  } catch (error) {
    console.error("Error during main execution:", error);
  }
}

