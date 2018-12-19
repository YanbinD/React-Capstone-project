import React, { Component } from "react";
import Like from "./common/Like";
import Pagniation from "./common/Pagination";
// import ReactDom from "react-dom";
import { getMovies } from "../services/fakeMovieService";
import {  paginate } from "../utils/paginate"

const style = {
  padding: "20px 0 0 0"
};

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies(),
      pageSize: 4,
      currentPage : 1
    };
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
    this.setState({currentPage : page});
  };

  render() {
    // const movieCount = this.state.movies.length;
    // equal 
    const {length : movieCount} = this.state.movies;
    const {pageSize, currentPage, movies: allMovies} = this.state;

    if (movieCount === 0) {return <p>there are no movie</p>;}

    const movies_ = paginate(allMovies, currentPage, pageSize);//render this instead of state

    return (
      <div>
        <p style={style}>Showing {movieCount} movies</p>
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
          movieCount={movieCount}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Movies;
