const API_KEY_omdb = "1d8a8c8a"; //omdbapi.com
const API_KEY_tmdb = "6369fcc46c83ecd475d3f734321f2a0b"; //themoviedb.org

const apiUrl = `http://www.omdbapi.com/?apikey=${API_KEY_omdb}&`;
const apiUrl_MovieDB = ``;



let searchInput = "harry"; //!test

//api search
let searchUrl = apiUrl + `s=${searchInput}`;


// fetch data from the api
let getMovies = async(url) => {   
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

getMovies(searchUrl).then(data => console.log(data));
