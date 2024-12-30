import { Movie } from "./types.ts";
import { isFavorite } from "./utils.ts";


  /* TODO replace with star icon and heart icon */
  export function createMovieModal(movie: Movie) {

 // Check if the movie is a favorite
  const isFavorited = isFavorite(movie.id);
  const favoriteClass = isFavorited ? "loved" : "";

    const movieModal = document.createElement('div');
    movieModal.classList.add('movie-modal');
    movieModal.innerHTML = `
    <button type="button" class="movie-modal-close">X</button>
    <div class="movie-modal-backdrop" style="background: url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}') lightgray 50% / cover no-repeat" aria-label="${movie.title} movie backdrop">
      <svg class ="ux-shape-divider" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path class="ux-shape-fill dark" d="M0 0C0 0 200 50 500 50C800 50 1000 0 1000 0V101H0V1V0Z"></path>
                </svg>
    </div>
    <section class="movie-modal-title-container">
        <h3 class="movie-modal-title">${movie.title}</h3>
    </section>
    <section class="rating-container">
        <div class="rating-group">
            <p class="star-icon">⭐️</p> <!-- todo replace with star icon -->
            <p class="movie-modal-rating">${movie.vote_average}/10</p> 
            <p class="vote-count">(${movie.vote_count} votes)</p> 
        </div>
        <button class="love-button ${favoriteClass}" data-movie-id="${movie.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" fill="white" fill-opacity="0.4"/>
        </svg>
      </button> 
    </section>
    <section class="information-container">
        <ul class="movie-genres">
            ${movie.genres.map(genre => `<li>${genre.name}</li>`).join('- ')}
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
                ${movie.cast
                    ? movie.cast.map(actor => `
                        <li class="actor-list-item">
                            <img class="actor-image" src="${actor.profile_path}" alt="${actor.name}">
                            <span>${actor.name}</span>
                        </li>
                    `).join('')
                    : '<li>No cast information available</li>'
                }
            </ol>
        </section>
    </section>
    `;
    document.body.appendChild(movieModal);

    const closeButton = movieModal.querySelector('.movie-modal-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        movieModal.remove();
      });
    }
}