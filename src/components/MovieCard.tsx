import { Card, Elevation } from "@blueprintjs/core";
import { Movie } from "../types/MovieObject";

interface props {
  movieDeatils: Movie;
}
export default function MovieCard({ movieDeatils }: props) {
  return (
    <Card interactive={true} elevation={Elevation.FOUR} className="card">
      <img
        src={`https://image.tmdb.org/t/p/w342${movieDeatils.poster_path}`}
        alt="Poster unable able to load"
        height="300px"
        width="100%"
      />
    </Card>
  );
}
