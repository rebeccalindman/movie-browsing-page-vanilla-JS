# movie-browsing-page-vanilla-JS

# API
API key is not secret. Included in the api.ts file.


API-dokumentation:
https://developer.themoviedb.org/docs/getting-started

__URL__

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

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";




# Figma
Figma-designen har använts som initial plan. Avvikelserna är störst för modalen och för funktioner som har tillkommit i efterhand.


_Länk_

=======
https://developer.themoviedb.org/docs/getting-started

# Figma
Figma-designen har använts som initial plan. Avvikelserna är störst för modalen och för funktioner som har tillkommit i efterhand.

_Länk_
https://www.figma.com/design/2KD3FIrf0SKUm9ZY2b32Mm/Filmkv%C3%A4ll?node-id=0-1&t=ikbsUnsbIMVcKKsP-1

Lösenord: ****** (ledtråd: klassen)


# Arbetsprocess

* Trello för planering och prioritering av nya uppgifter/felsökning

_Git_ 
* Jag har använt mig av flera branches för att enkelt kunna ångra större ändringar, t.ex. en branch för movie-cards respektive modal
* Dessa har jag mergeat in i 'develop'
