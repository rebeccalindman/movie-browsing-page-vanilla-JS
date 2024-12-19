import { Movie, MovieData } from './api';

const topMovieList = document.getElementById('top-movie-list') as HTMLUListElement;

export const renderMovie = (movie: Movie) => {

    //create and append backdrop image
    const backdrop = document.createElement('img');
    backdrop.src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    topMovieList.appendChild(backdrop);

    // Create and append title
    const title = document.createElement('h2');
    title.textContent = movie.title;
    topMovieList.appendChild(title);

    //release date
    const releaseDate = document.createElement('small');
    releaseDate.textContent = movie.release_date;
    topMovieList.appendChild(releaseDate);

    // Create and append overview
    const overview = document.createElement('p');
    overview.textContent = movie.overview;
    topMovieList.appendChild(overview);

    //movie id
    const movieID = document.createElement('p');
    movieID.textContent = movie.id.toString();
    topMovieList.appendChild(movieID);
  
    console.log(movie);
  };

  export const renderMovieCard = (movie: Movie) => {

     // Create and append image
     const img = document.createElement('img');
     img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
     topMovieList.appendChild(img);

     // Create and append title
    const title = document.createElement('h2');
    title.textContent = movie.title;
    topMovieList.appendChild(title);

   
  }
  