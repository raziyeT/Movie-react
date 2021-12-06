import React, { Component } from "react";
import Like from "./Common/Like";
import TableHeader from "./Common/TableHeader";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInstock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "Like" },
    { key: "Delete" },
  ];

  render() {
    const { movies, onLikde, onDelete, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}/>
        <tbody>
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
        </tbody>
      </table>
          
    );
  }
}

export default MoviesTable;
