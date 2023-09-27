import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Colors } from "@blueprintjs/core";
import { getMovies } from "../server/api";
import Table from "../components/Table";
import IdealState from "../components/IdealState";

export default function HomePage() {
  let [page, UpdatePage] = useState(1);
  const { data, isLoading } = useQuery({
    queryFn: () => getMovies(page),
    queryKey: ["getMovies", { page }]
  });
  if (isLoading) return <IdealState state="loading" />;
  else {
    return (
      <>
        <div style={{ backgroundColor: Colors.DARK_GRAY1 }}>
          <Table MoviesDB={data.results} />
          <br />
          <Button
            style={{ margin: "40px auto" }}
            intent="success"
            onClick={() => {
              if (page + 1 < data.total_pages) {
                UpdatePage(++page);
              }
            }}
            text="Get More Result's From Server"
          />
        </div>
      </>
    );
  }
}
