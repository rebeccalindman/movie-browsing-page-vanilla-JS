//utils.ts

export function getGenreFromId(genreId: number, genres: { id: number; name: string }[] | null): string {
    if (!genres) return 'Unknown Genre'; // Fallback for null genres list
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : 'Unknown Genre'; // Fallback for missing genre ID
  }
  