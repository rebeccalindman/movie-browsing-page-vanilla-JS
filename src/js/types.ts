export type Movie = {
    title: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    id: number;
    love?: boolean;
    vote_average: number;
    vote_count: number;
    genres: { id: number; name: string }[];
    cast: Cast[];
  };
  
  export type Cast = {
    profile_path: string;
    name: string;
  }
  
  export type MovieData = Movie[];
  
  