export const renderMovie = (movie) => {

    //create and append backdrop image
    const backdrop = document.createElement('img');
    backdrop.src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    document.body.appendChild(backdrop);

    // Create and append title
    const title = document.createElement('h2');
    title.textContent = movie.title;
    document.body.appendChild(title);

    //release date
    const releaseDate = document.createElement('small');
    releaseDate.textContent = movie.release_date;
    document.body.appendChild(releaseDate);

    // Create and append overview
    const overview = document.createElement('p');
    overview.textContent = movie.overview;
    document.body.appendChild(overview);

    //movie id
    const movieID = document.createElement('p');
    movieID.textContent = movie.id;
    document.body.appendChild(movieID);
  
    console.log(movie);
  };

  export const renderMovieCard = (movie) => {

     // Create and append image
     const img = document.createElement('img');
     img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
     document.body.appendChild(img);

     // Create and append title
    const title = document.createElement('h2');
    title.textContent = movie.title;
    document.body.appendChild(title);

   
  }
  