//dom.ts

export function displayUserMessage (userMessage1: string, userMessage2: string): void {
    // Remove empty movie cards wrapper
    const movieCardsWrapper = document.querySelector('.movie-cards-wrapper');

    if (movieCardsWrapper) { 
        const movieCardContainers = movieCardsWrapper.querySelectorAll('.movie-card-container');
        if (Array.from(movieCardContainers).every(container => container.children.length === 0)) { // check if all movie card containers are empty
            movieCardsWrapper.remove();
        }
    }



    // Adds user message
    const userMessageContainer = document.createElement('div');
    userMessageContainer.style.backgroundColor = 'white';
    userMessageContainer.style.padding = '20px';
    userMessageContainer.style.width = '100%';
    userMessageContainer.style.textAlign = 'center';

    let userMessageElement = document.createElement('p');
    userMessageElement.textContent = userMessage2;
    userMessageContainer.appendChild(userMessageElement);

     // Update section header and add user message
     const sectionHeader = document.querySelector('.section-header');
     if (sectionHeader) {
        sectionHeader.textContent = userMessage1;
        sectionHeader.parentElement?.insertBefore(userMessageContainer, sectionHeader.nextSibling);
        
    }

   

}



