const API_KEY = "1d8a8c8a";

const apiUrl = `http://www.omdbapi.com/?apikey=${API_KEY}&`;



const searchInput = "harry"; //!test

//api search
let searchUrl = apiUrl += `s=${searchInput}`;


// fetch data from the api
const getMovies = async(url) => {   
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

getMovies(searchUrl).then(data => console.log(data));
