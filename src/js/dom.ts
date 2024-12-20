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


  /* TODO replace with star icon and heart icon */
  export function createMovieModal(movie: Movie) {
    const movieModal = document.createElement('div');
    movieModal.classList.add('movie-modal');
    movieModal.innerHTML = `
    <button type="button" class="movie-modal-close">X</button>
    <div class="movie-modal-backdrop"  aria-label="${movie.title} movie backdrop"></div>
    <section class="movie-modal-title-container">
        <h3 class="movie-modal-title">${movie.title}</h3>
    </section>
    <section class="rating-container">
        <div class="rating-group">
            <p class="star-icon">⭐️</p> <!-- todo replace with star icon -->
            <p class="movie-modal-rating">${movie.vote_average}/10</p> 
            <p class="vote-count">(${movie.vote_count} votes)</p> 
        </div>
        <button type="button" class="love-button">❤️</button> 
    </section>
    <section class="information-container">
        <ul class="movie-genres">
            ${movie.genres.map(genre => `<li>${genre.name}</li>`).join('')}
        </ul>
        <p class="movie-modal-overview">${movie.overview}</p>
        <p class="movie-modal-release-date">${movie.release_date}</p>
        
        <div class="movie-modal-links">
            <h4>Links</h4>
            <ul>
                <li><a href="#">IMDb</a></li>
                <li><a href="#">Rotten Tomatoes</a></li>
            </ul>
        

            <h4>Watch on</h4>
            <ul class="movie-modal-links">
                <li><a href="#">Netflix</a></li>
                <li><a href="#">Amazon Prime</a></li>
            </ul>
        </div>
        
        <section class="actors-section">
            <ol>
                ${movie.credits.cast.map(actor => `<li class="actor-list-item">
                    <img class="actor-image" src="${actor.profile_path}" alt="${actor.name}" class="actor-image">
                    <span>${actor.name}</span>
                </li>`).join('')}
            </ol>
        </section>
    </section>
    `;
    topMovieList.appendChild(movieModal);

  }
  