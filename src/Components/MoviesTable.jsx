import React, { Component } from "react";
import Like from "./Common/Like";
import TableHeader from "./Common/TableHeader";
import TableBody from "./Common/TableBody";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "Like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLikde(movie)} />
      ),
      label:"Like"
    },
    {
      key: "Delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm">
          Delete
        </button>
      ),
      label:"Delete"
    },
  ];

  render() {
    const { movies, onLikde, onDelete, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody data={movies} columns={this.columns} />
        {/* <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
             <td>{movie.title} </td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLikde(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                  >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    );
  }
}

export default MoviesTable;
