//dom.ts

import { Movie, MovieData } from "./types.ts";
import { addCategoryFilter, getGenreFromId, syncLovePropertyAcrossStoredArrays } from "./utils.ts";
import { storeDataArray, fetchMovies } from "./api.ts";
import { getCachedGenresList } from "./utils.ts";




