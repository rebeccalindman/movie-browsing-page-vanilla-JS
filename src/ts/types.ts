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

/* Structure for movie providers */
/*
  "SE": {
      "link": "https://www.themoviedb.org/movie/592695-pleasure/watch?locale=SE",
      "free": [
        {
          "logo_path": "/w1V9hzBaRlkpISBWhCv676kI8Mp.jpg",
          "provider_id": 496,
          "provider_name": "Cineasterna",
          "display_priority": 24
        }
      ],
      "buy": [
        {
          "logo_path": "/9ghgSC0MA082EL6HLCW3GalykFD.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 4
        },
        {
          "logo_path": "/bnoTnLzz2MAhK3Yc6P9KXe5drIz.jpg",
          "provider_id": 76,
          "provider_name": "Viaplay",
          "display_priority": 6
        },
        {
          "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
          "provider_id": 3,
          "provider_name": "Google Play Movies",
          "display_priority": 9
        },
        {
          "logo_path": "/bZvc9dXrXNly7cA0V4D9pR8yJwm.jpg",
          "provider_id": 35,
          "provider_name": "Rakuten TV",
          "display_priority": 15
        },
        {
          "logo_path": "/auWzottqpExOHUlJwDZ4DvdHGoL.jpg",
          "provider_id": 423,
          "provider_name": "Blockbuster",
          "display_priority": 16
        },
        {
          "logo_path": "/sNmIwrniZZORvNJOmEuWGhwBJNf.jpg",
          "provider_id": 426,
          "provider_name": "SF Anytime",
          "display_priority": 17
        }
      ],
      "flatrate": [
        {
          "logo_path": "/vyu1bwP7H0p7B8BLB3QRwHVmvlA.jpg",
          "provider_id": 435,
          "provider_name": "Draken Films",
          "display_priority": 18
        }
      ],
      "rent": [
        {
          "logo_path": "/9ghgSC0MA082EL6HLCW3GalykFD.jpg",
          "provider_id": 2,
          "provider_name": "Apple TV",
          "display_priority": 4
        },
        {
          "logo_path": "/bnoTnLzz2MAhK3Yc6P9KXe5drIz.jpg",
          "provider_id": 76,
          "provider_name": "Viaplay",
          "display_priority": 6
        },
        {
          "logo_path": "/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
          "provider_id": 3,
          "provider_name": "Google Play Movies",
          "display_priority": 9
        },
        {
          "logo_path": "/bZvc9dXrXNly7cA0V4D9pR8yJwm.jpg",
          "provider_id": 35,
          "provider_name": "Rakuten TV",
          "display_priority": 15
        },
        {
          "logo_path": "/auWzottqpExOHUlJwDZ4DvdHGoL.jpg",
          "provider_id": 423,
          "provider_name": "Blockbuster",
          "display_priority": 16
        },
        {
          "logo_path": "/sNmIwrniZZORvNJOmEuWGhwBJNf.jpg",
          "provider_id": 426,
          "provider_name": "SF Anytime",
          "display_priority": 17
        },
        {
          "logo_path": "/sgws7qaFHYTEeYhc8RCjZ5D7IlH.jpg",
          "provider_id": 517,
          "provider_name": "TriArt Play",
          "display_priority": 23
        }
      ]
    },
     */
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
  
  
