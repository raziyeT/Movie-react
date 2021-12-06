import React, { Component } from "react";
import ListGroup from "./Common/ListGroup";
import Pagination from "./Common/Pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../Utils/Paginate";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: getGenres(),
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

    this.setState({
      movies: getMovies(),
      genres: genres,
    });
  }

  handleDelete = (newMovie) => {
    const movies = this.state.movies.filter(
      (movie) => movie._id !== newMovie._id
    );
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked; //if this is true it becomes false it or vice versa*/
    this.setState({ movies });
  };

  handleChangePage = (page) => {
    this.setState({ currentPage: page }, () =>
      console.log("currentPage", this.state.currentPage)
    );
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: movieCount } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;

    if (movieCount === 0) return <p>There is no movie in dataBase</p>;

    const filtered =
      selectedGenre && selectedGenre._id //if both are truth then run rest of codes//
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3 left">
          <ListGroup
            selectedItem={this.state.selectedGenre}
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
          />
        </div>

        <div className="col right">
          <p>There is {filtered.length} Movies</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            onLikde={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handleChangePage}
          />
        </div>
      </div>
    );
  }
}
export default Movies;
