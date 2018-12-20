import React, { Component } from "react";
import MoviesTable from "./MoviesTable";
import Pagniation from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import _ from "lodash";
// import ReactDom from "react-dom";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

const style = {
  padding: "0 0 0 29px"
};

class MoviesPanel extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genres: [],
      pageSize: 4,
      currentPage: 1,
      selectedGenre: "",
      sortColumn: { pathToTargetProperty: "title", order: "asc" }
    };
  }

  componentDidMount() {
    //append all genres to the genres retrieved from get Genres()
    const genres = [{ name: "All genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = id => {
    const movies = this.state.movies.filter(m => m._id !== id);
    // this.setState({movies : movies});
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 }); //reset the currentPage to 1 after switching genre
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  // this should return two object that the rest of the render object requires
  preprocessRenderData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre.name !== "All genres"
        ? allMovies.filter(m => m.genre.name === selectedGenre.name)
        : allMovies;

    const sorted = _.orderBy(
      filtered,
      [sortColumn.pathToTargetProperty],
      sortColumn.order
    );

    const movies_ = paginate(sorted, currentPage, pageSize); //render this instead of movies[] in state 

    return { totalMovieCount: filtered.length, data: movies_ };
  };

  render() {
    // const movieCount = this.state.movies.length;
    // equals below
    const { length: movieCount } = this.state.movies;

    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn
    } = this.state;

    if (movieCount === 0) {
      return <p>there are no movie</p>;
    }

    const { totalMovieCount, data } = this.preprocessRenderData(); //all the sorting and filtering logic

    return (
      <div className="Movies_Container">
        <div className="row" style={style}>
          <p style={style}>
            Showing {totalMovieCount} movies{" "}
            {selectedGenre ? "from " + selectedGenre.name : ""}
          </p>
        </div>

        <div className="row">
          <div className="col-2 col-md-3">
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>

          <div className="col">
            <MoviesTable
              movies={data}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />

            <Pagniation
              movieCount={totalMovieCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MoviesPanel;
