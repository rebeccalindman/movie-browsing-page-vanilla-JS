//main.ts
import { Movie, MovieData } from "./types.ts";
import { fetchMovies, apiUrl, API_KEY_tmdb } from './api.ts';
import { renderMovie, renderMovieCard, createCategorySection } from './dom.ts';
import { createMovieModal } from './modal.ts';

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
  main();
});


async function main() {
  try {
    // Fetch and display featured movies
    await fetchMovies(apiUrl);
    await displayFeaturedMovies();

    // Display categories
    createCategorySection('Action');
    createCategorySection('Drama');

    // Display a single movie card (optional, replace URL as needed)
    await displayMovieCard(apiUrl);

    // Example of rendering a modal with mock data (for testing)
    createMovieModal(mockMovie);
  } catch (error) {
    console.error('Error during main execution:', error);
  }
};

// Featured Movies Function
async function displayFeaturedMovies() {
  const featuredApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_tmdb}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_providers=netflix%20OR%20prime%20OR%20svt&year=2024`;

  try {
    const data = await fetchMovies(featuredApiUrl);
    if (data) {
      data.forEach(movie => renderMovie(movie));
    } else {
      console.warn('No featured movies found.');
    }
  } catch (error) {
    console.error('Error displaying featured movies:', error);
  }
}

// Single Movie Card Function
async function displayMovieCard(url: string) {
  try {
    const data = await fetchMovies(url);
    if (data && data.length > 0) {
      const firstMovie = data[0];
      renderMovieCard(firstMovie);
    } else {
      console.error('No movies found for displayMovieCard!');
    }
  } catch (error) {
    console.error('An error occurred while displaying the movie card:', error);
  }
}

