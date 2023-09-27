import axios from "axios";
import { Movie } from "../types/MovieObject";

export const getMovies = async (pageNumber: number): Promise<any> => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=538db5164c666f720fa2b07317c845f5&page=${pageNumber}`
    )
    .then(
      (res) =>
        res.data as {
          page: number;
          results: Array<Movie>;
          total_pages: number;
        }
    );
};

export const searchMovie = async (title: string): Promise<any> => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?&include_adult=false&language=en-US&page=1&api_key=538db5164c666f720fa2b07317c845f5&query=${title}`
    )
    .then(
      (res) =>
        res.data as {
          page: number;
          results: Array<Movie>;
          total_pages: number;
        }
    );
};
