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
    providers: ProviderList;
    imdb: Imdb;
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
  
  export type MovieData = Movie[] | null;

  export type Provider = {
    logo_path: string;
    provider_id: number;
    provider_name: string;
    display_priority: number;
  }

  export type ProviderList = {
    link: string;
    free?: Provider[];
    buy?: Provider[];
    flatrate?: Provider[];
    rent?: Provider[];
  }

  export type Imdb = {
      link: string,
      imdb_id: number | null,
  };
  
  
