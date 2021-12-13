import React, { Component } from "react";
import ListGroup from "./Common/ListGroup";
import Pagination from "./Common/Pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../Utils/Paginate";
import MoviesTable from "./MoviesTable";
import { Link } from "react-router-dom";
import SearchBox from "./Common/SearchBox";
import _, { identity } from "lodash";

class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    selectedGenre: null,
    searchQuery: "",
    //selectedGenre: getGenres(),
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

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    // the query that user type in the input//
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  getpageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
      searchQuery
    } = this.state;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(
        (movie) => movie.genre._id === selectedGenre._id
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: movieCount } = this.state.movies;
    const { pageSize, currentPage, sortColumn ,searchQuery} = this.state;

    if (movieCount === 0) return <p>There is no movie in dataBase</p>;

    const { totalCount, data: movies } = this.getpageData();

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
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>

          <p>There is {totalCount} Movies</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            onLikde={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={totalCount}
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
