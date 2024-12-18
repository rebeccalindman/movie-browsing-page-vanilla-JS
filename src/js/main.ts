import { fetchMovies, apiUrl, Movie, MovieData } from './api';
import { renderMovie, renderMovieCard } from './dom';


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
displayFirstMovie(apiUrl);


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

// Call the function to display movie card
displayMovieCard(apiUrl);

  
    

    // get the first object from JSON, parse to javascript


    // get and display poster_path (img)
    // get movie id


    // get and display title
