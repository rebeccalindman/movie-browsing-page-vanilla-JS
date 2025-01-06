# movie-browsing-page-vanilla-JS

Startas genom terminalen såhär:

1. Se till att vara i main-branchen
2. Högerklicka på huvud-mappen och starta en terminal
3. parcel public/index.html

# Projektet

Idén var att bygga en hemsida för användare på jakt efter en film till fredagsmyset. Genom att enkelt kunna ta del av information om populära filmer i olika kategorier, så som en länk till IMDb och en överblick över olika tjänster som levererar filmen. 

_Favoriter_ 

Med en funktion att favoritmarkera filmer och spara dem lokalt i en favorit-lista, så blir det enklare att hitta en passande film.

_Sökfunktion_ 

Det finns även en sökfunktion om man själv vill söka fram en titel. 

_Mer info_ 

När användaren har en idé om vilka filmer som hen vill se så finns det lättillgänglig information om var dessa filmer kan köpas/hyras/streamas som koms åt genom att klicka på ett film-kort. Modalen listar information om var de finns att se i Sverige.

# Figma
Figma-designen har använts som initial plan. Avvikelserna är störst för modalen och för funktioner som har tillkommit i efterhand.

_Länk_
https://www.figma.com/design/2KD3FIrf0SKUm9ZY2b32Mm/Filmkv%C3%A4ll?node-id=0-1&t=ikbsUnsbIMVcKKsP-1

Lösenord: fjsx24 


# Arbetsprocess

* Trello för planering och prioritering av nya uppgifter/felsökning

_Git_ 
* Jag har använt mig av flera branches för att enkelt kunna ångra större ändringar, t.ex. en branch för movie-cards respektive modal
* Dessa har jag mergeat in i 'develop'


# Lighthouse-analys
Mobil:
54 performance --> 60
- mindre storlek på bilder
- flyttade en del css till html-filen


# API
API key is not secret. Included in the api.ts file.

API-dokumentation:
https://developer.themoviedb.org/docs/getting-started

# URL:er från API

_Sökfunktionen_

 const apiSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_tmdb}&query=${encodeURIComponent(query)}`;

_Kategorier_

export const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_tmdb}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

_"Featured"-filmer_
export const apiFeaturedMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_tmdb}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_providers=netflix%20OR%20prime%20OR%20svt&year=2024`;


_Hämta information om skådespelare_
const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY_tmdb}&include_adult=false&language=en-US,sv-SE`;

_Svenska filmer_
https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&page=1&region=SE&sort_by=popularity.desc&with_origin_country=SE&with_original_language=sv&year=2024


_Skådespelarbilder_

const imageBaseUrl = "https://image.tmdb.org/t/p/w200";



