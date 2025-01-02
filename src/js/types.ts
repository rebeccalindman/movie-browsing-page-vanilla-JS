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
    cast: CastMember[];
  };

  
  export type CastMember = {
    profile_path: string;
    gender: number;
    name: string;
    id: number;
    cast_id: number;
    character: string;
    order: number;
  }
  
  export type MovieData = Movie[];
  
  
