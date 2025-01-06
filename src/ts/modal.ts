import { Movie, Provider, ProviderList } from "./types.ts";
import { isFavorite, toggleFavorite } from "./utils.ts";
import { getProvidersListForMovie } from "./api.ts";

  export async function createMovieModal(movie: Movie) {

 // Check if the movie is a favorite
  const isFavorited = isFavorite(movie.id);
  const favoriteClass = isFavorited ? "loved" : "";

    const movieModal = document.createElement('div');
    movieModal.classList.add('movie-modal');
    
    const movieModalOverlay = document.createElement('div');
    movieModalOverlay.classList.add('movie-modal-overlay');

    // Add a class to the <body> to disable scrolling
    document.body.classList.add('no-scroll');

    movieModal.innerHTML = `
    <button type="button" class="movie-modal-close">X</button>
    <div class="movie-modal-backdrop" style="background: url('https://image.tmdb.org/t/p/w500/${movie.poster_path}') lightgray 50% center / cover no-repeat" aria-label="${movie.title} movie backdrop">
    </div>
    <section class="movie-modal-title-container">
        <h3 class="movie-modal-title">${movie.title}</h3>
    </section>
    <span></span>
    <section class="rating-container">
        <div class="rating-group">
            <p class="movie-modal-rating">${movie.vote_average}/10</p> 
            <p class="vote-count">(${movie.vote_count})</p> 
        </div>
        <button class="love-button ${favoriteClass}" aria-label="Add to favorites" data-movie-id="${movie.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" fill="white" fill-opacity="0.4"/>
        </svg>
      </button> 
    </section>
    <section class="information-container">
        <ul class="movie-genres">
        ${movie.genres.map(genre => `<li>${genre.name}</li>`).join('- ')}
        </ul>
        <p class="movie-modal-release-date">${movie.release_date}</p>   
        <p class="movie-modal-overview">${movie.overview}</p>
        
       
    </section>
    <section class="movie-modal-links">
            <div class="links-container">
                <h4>Links</h4>
                <ul>
                    <li><a href="${movie.imdb.link}" target="_blank" rel="noopener noreferrer">IMDb</a></li>
                </ul>
            </div>
            <div class="watch-container">
            </div>
    </section>
    <section class="actors-section">
        <ol>
            ${movie.cast
                ? movie.cast.map(actor => `
                     <li class="actor-list-item">
                        <img class="actor-image lazy" src="${actor.profile_path}" alt="${actor.name}">
                        <div style="display: flex; flex-direction: column;">
                        <span aria-label="Role" style="font-weight: bold;">${actor.character}</span>
                        <span aria-label="Actor name">${actor.name}</span>
                        </div>
                        </li>
                `).join('')
                : '<li class="actor-list-item">No cast information available</li>'
            }
        </ol>
    </section>
    `;
    document.body.appendChild(movieModal);
    document.body.appendChild(movieModalOverlay);
    
    // available providerTypes: 'buy', 'rent', 'flatrate', 'free'
    const providers = await getProvidersListForMovie(movie.id);
    const watchContainer = movieModal.querySelector(".watch-container") as HTMLElement;

    if (providers && Object.keys(providers).length > 0) {
      createListOfProviders(providers, watchContainer);
    } else {
      watchContainer.innerHTML = `
        <h4>Watch Providers</h4>
        <p style="font-size: 1em; color: #666;">No watch providers are available for this movie at the moment.</p>
      `;
    }


    const closeModal = () => {
        movieModal.remove();
        movieModalOverlay.remove();
        // Remove the no-scroll class from the <body>
        document.body.classList.remove('no-scroll');
      };
    
      // Close when clicking on the close button or outside the modal
      document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains("movie-modal-overlay") || target.classList.contains("movie-modal-close")) {
          closeModal();
        }
      });
    
      // Attach click event to toggle favorite
      const loveButton = movieModal.querySelector(".love-button");
      if (!loveButton) {
        console.error("Love button not found");
        return;
      }
      
      loveButton.addEventListener("click", () => {
        toggleFavorite(movie);
    
        // Select all buttons with the same movie ID
        const loveButtons = document.querySelectorAll(`.love-button[data-movie-id="${movie.id}"]`);
        loveButtons.forEach((button) => button.classList.toggle("loved"));
    });
}


function createListOfProviders(
  providers: ProviderList,
  container: HTMLElement | null
): void {
  if (!providers || !container) {
    return;
  }

  // Combine all provider types into a single list with type information
  const providerMap = new Map<string, { provider: Provider; types: string[] }>();

  const addProviders = (type: string, providersArray?: Provider[]) => {
    if (!providersArray) return;
    providersArray.forEach((provider) => {
      const existingEntry = providerMap.get(provider.provider_name);
      if (existingEntry) {
        existingEntry.types.push(type); // Add the type to the existing provider
      } else {
        providerMap.set(provider.provider_name, { provider, types: [type] });
      }
    });
  };

  // Add providers from all categories
  addProviders("Subscription", providers.flatrate);
  addProviders("Rent", providers.rent);
  addProviders("Buy", providers.buy);
  addProviders("Free", providers.free);

  // Generate the HTML for the combined list of providers
  const providerListHtml = Array.from(providerMap.values())
    .map(({ provider, types }) => {
      const imageUrl = provider.logo_path
        ? `https://image.tmdb.org/t/p/original${provider.logo_path}`
        : "";
      const typesText = types.join(", "); // Combine types into a single string

      return `
        <li>
          <a href="${providers.link}" target="_blank" rel="noopener noreferrer">
            <img src="${imageUrl}" alt="${provider.provider_name}" class="provider-logo" />
            <span>${provider.provider_name}</span>
          </a>
          <span class="provider-types">(${typesText})</span>
        </li>
      `;
    })
    .join("");

  // Update the container with the generated list
  container.innerHTML = `
    <h4>Watch Providers in Sweden</h4>
    <p style="font-size: 0.9em; color: #666;"> Clicking on a provider will redirect you to the tmdb website with direct links to each provider. </p>
    <ul class="provider-list">
      ${providerListHtml}
    </ul>
  `;

  // Add CSS to style provider logos and types
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    .provider-logo {
      width: 20px;
      height: 20px;
      object-fit: contain;
      margin-right: 10px;
    }
    .provider-list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .provider-list li {
      display: flex;
      align-items: flex-end;
      margin: 10px;
    }
    .provider-types {
      margin-left: 5px;
      font-size: 0.9em;
      color: #666;
    }
  `;

  document.head.appendChild(styleElement);
}

