export type Movie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  overview: string;
  poster_path: string;
  genre_ids: Array<number>;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
