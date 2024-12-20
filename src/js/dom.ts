//dom.ts

import { Movie, MovieData } from "./types.ts";

const mainElement = document.querySelector('main');
const topMovieWrapper = document.getElementById('featured') as HTMLAreaElement;

export function renderMovie (movie: Movie) {

    //create and append backdrop image
    const backdrop = document.createElement('img');
    backdrop.src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    topMovieWrapper.appendChild(backdrop);

    // Create and append title
    const title = document.createElement('h2');
    title.textContent = movie.title;
    topMovieWrapper.appendChild(title);

    //release date
    const releaseDate = document.createElement('small');
    releaseDate.textContent = movie.release_date;
    topMovieWrapper.appendChild(releaseDate);

    // Create and append overview
    const overview = document.createElement('p');
    overview.textContent = movie.overview;
    topMovieWrapper.appendChild(overview);

    //movie id
    const movieID = document.createElement('p');
    movieID.textContent = movie.id.toString();
    topMovieWrapper.appendChild(movieID);
  
    console.log(movie);
  };

  export function renderMovieCard (movie: Movie) {

     // Create and append image
     const img = document.createElement('img');
     img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
     topMovieWrapper.appendChild(img);

     // Create and append title
    const title = document.createElement('h2');
    title.textContent = movie.title;
    topMovieWrapper.appendChild(title);

   
  }


  export function createCategorySection(category: string) {
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
  
    if (!topMovieWrapper) {
      console.error("Error: 'top-movies-wrapper' element not found in the DOM.");
      return;
    }
  
    const topMoviesList = document.createElement('section');
    topMoviesList.classList.add('top-movies-list');
    topMovieWrapper.innerHTML = `
      <div class="movie-card-container"></div>
    `;
  
    mainElement.appendChild(topMoviesList);
  }
  

