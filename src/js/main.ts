//main.ts
import { Movie, MovieData } from "./types.ts";
import { fetchMovies, apiUrl, apiFeaturedMoviesUrl, displayErrorMessage, storeDataArray, getGenresList } from './api.ts';
import { renderMovieCard, createCategorySection } from './dom.ts';
import { createMovieModal } from './modal.ts';
import { getGenreFromId } from "./utils.ts";  

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
    const featuredMovies = await fetchMovies(apiUrl);
    if (!featuredMovies || featuredMovies.length === 0) {
      console.error('No movies found or fetched data is invalid.');
      return;
    }
    

    storeDataArray(featuredMovies, "featuredMovies");

    const genresList = await getGenresList();

    if (featuredMovies) {
      featuredMovies.forEach(movie => { 
        const listOfGenres: { id: number; name: string }[] = [];

        movie.genres.forEach(genre => {
          const genreName = getGenreFromId(genre.id, genresList);
          listOfGenres.push({ id: genre.id, name: genreName });
        });

        movie.genres = listOfGenres;
      });
    

      // Display movie cards if movies are available
      displayMovieCards(featuredMovies);
    } else {
      console.error('No movies found!');
    }

    // Display categories
    createCategorySection('Action');
    createCategorySection('Drama');

    // Example of rendering a modal with mock data (for testing)
    createMovieModal(mockMovie);
  } catch (error) {
    console.error('Error during main execution:', error);
  }
}



// Single Movie Card Function
function displayMovieCards(movies: MovieData) {
  try {
    movies.forEach(movie => {
      renderMovieCard(movie);
  });
    
  } catch (error) {
    console.error('An error occurred while displaying the movie cards:', error);
  }
  finally {
    console.log('Movie cards displayed successfully.');
}
}
