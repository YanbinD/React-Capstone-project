import "./style.css";
import React, { Component } from "react";
import Like from "./common/Like";
import Pagniation from "./common/Pagination";
import ListGroup from "./common/ListGroup";
// import ReactDom from "react-dom";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

const style = {
  padding: "0 0 0 29px"
};

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genres: [],
      pageSize: 4,
      currentPage: 1,
      selectedGenre: ""
    };
  }

  componentDidMount() {
    //append all genres to the genres retrieved from get Genres()
    const genres = [{name: "All genres"}, ...getGenres()];

    this.setState({ movies: getMovies(), genres});
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
    this.setState({ selectedGenre: genre , currentPage : 1});
  };

  render() {
    // const movieCount = this.state.movies.length;
    // equal
    const { length: movieCount } = this.state.movies;

    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre
    } = this.state;

    if (movieCount === 0) {
      return <p>there are no movie</p>;
    }

    const filtered = selectedGenre && selectedGenre.name !== 'All genres'
      ? allMovies.filter(m => m.genre.name === selectedGenre.name)
      : allMovies;
    const movies_ = paginate(filtered, currentPage, pageSize); //render this instead of state

    return (
      <div className="Movies_Container">
        <div className="row" style={style}>
          <p style={style}>
            Showing {filtered.length} movies {selectedGenre ? "from " + selectedGenre.name : ""}
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
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                </tr>
              </thead>

              <tbody>
                {movies_.map(movie => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onLikeClick={() => this.handleLike(movie)}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie._id)}
                        className="btn btn-danger btn-sm"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagniation
              movieCount={filtered.length}
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

export default Movies;
