import { Movie } from "./types.ts";


  /* TODO replace with star icon and heart icon */
  export function createMovieModal(movie: Movie) {
    const movieModal = document.createElement('div');
    movieModal.classList.add('movie-modal');
    movieModal.innerHTML = `
    <button type="button" class="movie-modal-close">X</button>
    <div class="movie-modal-backdrop" style="background-image: url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')" aria-label="${movie.title} movie backdrop">
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
        <button type="button" class="love-button">❤️</button> 
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