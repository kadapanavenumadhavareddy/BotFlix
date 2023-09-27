import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel
} from "@tanstack/react-table";
import { useState } from "react";
import { Button, Colors } from "@blueprintjs/core";
import { Movie } from "../types/MovieObject";

interface props {
  MoviesDB: Array<Movie>;
}

const columnHelper = createColumnHelper<Movie>();
const getImageUrl = (path: string): string => {
  return `https://image.tmdb.org/t/p/w185${path}`;
};
const columns = [
  columnHelper.accessor("title", {
    cell: (info) => info.getValue() || "Not Available",
    header: "Title"
  }),
  columnHelper.accessor("overview", {
    cell: (info) => info.getValue() || "Not Available",
    header: "Overview"
  }),
  columnHelper.accessor("release_date", {
    cell: (info) => info.getValue() || "Not Available",
    header: "Released On"
  }),
  columnHelper.accessor("poster_path", {
    cell: (info) => (
      <img
        src={getImageUrl(info.getValue())}
        alt="Poster unable able to load"
        height="100%"
        width="100%"
      />
    ),
    header: "Poster"
  })
];
export default function Table({ MoviesDB }: props) {
  const [data] = useState(() => [...MoviesDB]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });
  return (
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
        <Button
          style={{ marginRight: "10px", color: Colors.DARK_GRAY2 }}
          onClick={() => table.previousPage()}
          text="Previous"
          disabled={!table.getCanPreviousPage()}
        />
        <Button
          style={{ marginLeft: "10px", color: Colors.DARK_GRAY2 }}
          onClick={() => {
            table.nextPage();
          }}
          text="Next"
          disabled={!table.getCanNextPage()}
        />
      </div>
    </>
  );
}
