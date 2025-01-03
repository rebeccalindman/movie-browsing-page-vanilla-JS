//dom.ts

export function displayUserMessage(userMessage1: string, userMessage2: string, cto?: string, link?: string): void {
    // Remove empty movie cards wrapper
    const movieCardsWrapper = document.querySelector('.movie-cards-wrapper');

    if (movieCardsWrapper) {
        const movieCardContainers = movieCardsWrapper.querySelectorAll('.movie-card-container');
        if (Array.from(movieCardContainers).every(container => container.children.length === 0)) {
            movieCardsWrapper.remove();
        }
    }

    // Check if user message container already exists
    let userMessageContainer = document.querySelector('.user-message-container') as HTMLDivElement | null;
    if (!userMessageContainer) {
        userMessageContainer = document.createElement('div');
        userMessageContainer.classList.add('user-message-container');
        userMessageContainer.style.backgroundColor = 'white';
        userMessageContainer.style.padding = '20px';
        userMessageContainer.style.width = '100%';
        userMessageContainer.style.textAlign = 'center';
    }

    // Update message text
    let userMessageElement = userMessageContainer.querySelector('p');
    if (!userMessageElement) {
        userMessageElement = document.createElement('p');
        userMessageContainer.appendChild(userMessageElement);
    }
    userMessageElement.textContent = userMessage2;

    // Update section header and add user message
    const sectionHeader = document.querySelector('.section-header');
    if (sectionHeader) {
        sectionHeader.textContent = userMessage1;
        if (!sectionHeader.parentElement?.contains(userMessageContainer)) {
            sectionHeader.parentElement?.insertBefore(userMessageContainer, sectionHeader.nextSibling);
        }
    }
    
    // Add call to action-button
    if (cto && link){
        const callToActionButton = document.createElement('button');
        callToActionButton.classList.add('call-to-action-button');
        callToActionButton.style.backgroundColor = 'black';
        callToActionButton.style.padding = '8px 16px';
        callToActionButton.style.border = 'none';
        callToActionButton.style.borderRadius = '8px';
        callToActionButton.style.marginTop = '20px';
        callToActionButton.style.cursor = 'pointer';

        callToActionButton.addEventListener('mouseover', () => {
            callToActionButton.style.backgroundColor = '#5f9ea0';
        });

        callToActionButton.addEventListener('mouseout', () => {
            callToActionButton.style.backgroundColor = 'black';
        });

        callToActionButton.innerHTML = `
            <a href="${link}" style="text-decoration: none; color: white; font-weight: bold;">${cto}</a>
            `;
        userMessageContainer.appendChild(callToActionButton);
    }

    
}



