import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { InputGroup, Classes, Colors } from "@blueprintjs/core";
import { debounce } from "lodash";
import MovieCard from "../components/MovieCard";
import { searchMovie } from "../server/api";
import { Movie } from "../types/MovieObject";
import IdealState from "../components/IdealState";

export default function SearchPage() {
  const [search, updateSearch] = useState("");
  const { data, isLoading } = useQuery({
    queryFn: () => searchMovie(search),
    queryKey: ["search", { search }]
  });
  const renderResult = (data: Array<Movie>) => (
    <div className="Movie-card-wrapper">
      {data?.map((movieDeatils) => (
        <MovieCard movieDeatils={movieDeatils} key={movieDeatils.id} />
      ))}
    </div>
  );
  const updateSearchValue = (e: any) => updateSearch(e.target.value);
  const renderIdealSate = <IdealState state="noresult" />;
  const debouncedHandler = debounce(updateSearchValue, 1000);
  return (
    <>
      <div style={{ backgroundColor: Colors.WHITE }}>
        <InputGroup
          large={true}
          placeholder="Search"
          type="search"
          onInput={debouncedHandler}
          className={Classes.ROUND}
          id="search-bar"
        />
        {isLoading ? (
          <IdealState state="loading" />
        ) : data.results.length ? (
          renderResult(data.results)
        ) : (
          renderIdealSate
        )}
      </div>
    </>
  );
}
