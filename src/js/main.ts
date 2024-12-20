import { fetchMovies, apiUrl, Movie, MovieData, Cast } from './api';
import { renderMovie, renderMovieCard, createMovieModal, createCategorySection } from './dom';


async function displayFirstMovie(url: string) {
  try {
    const data: MovieData = await fetchMovies(url);

    if (data && data.results.length > 0) {
      const firstMovie = data.results[0];
      renderMovie(firstMovie); // Pass the movie data to renderMovie
    } else {
      console.error('No movies found!');
    }
  } catch (error) {
    console.error('An error occurred while displaying the movie:', error.message);
  }
}


// Call the function to display the movie
/* displayFirstMovie(apiUrl); */



/* MOCK-MOVIE DATA TEST */
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
  genres: ["Drama"],
  cast: [
    {
      profile_path: "#",
      name: "Tim Robbins"
    },
    {
      profile_path: "#",
      name: "Morgan Freeman"
    }
  ] as Cast[]
};

const mockMovieData: MovieData = {
  results: [mockMovie],
  // other properties...
};

createMovieModal(mockMovie);

async function displayMovieCard(url) {
  try {
    const data = await fetchMovies(url);

    if (data && data.results.length > 0) {
      const firstMovie = data.results[0];
      await renderMovieCard(firstMovie); // Pass the movie data to renderMovieCard
    } else {
      console.error('No movies found!');
    }
  } catch (error) {
    console.error('An error occurred while displaying the movie:', error);
  }
}


createCategorySection('Action');
createCategorySection('Drama');

// Call the function to display movie card
/* displayMovieCard(apiUrl); */

  
    

    // get the first object from JSON, parse to javascript


    // get and display poster_path (img)
    // get movie id


    // get and display title
