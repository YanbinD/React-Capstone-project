import React, { Component } from "react";
import ReactDom from "react-dom";
import { getMovies } from "../services/fakeMovieService";

const style = {
    
    padding : "20px 0 0 0" 
}

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: getMovies()
    };
  }

  handleDelete = id => {
    const movies = this.state.movies.filter(m => m._id !== id);
    // this.setState({movies : movies});
    this.setState({ movies });
  };



  render() {
    const numbersOfMovie = this.state.movies.length;
    if (numbersOfMovie === 0) {
      return <p>there are no movie</p>;
    }
    return (
      <div>
        <p style={style}>Showing {numbersOfMovie} movies</p>
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
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td >{movie.title}</td>
                <td >{movie.genre.name}</td>
                <td >{movie.numberInStock}</td>
                <td >{movie.dailyRentalRate}</td>
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
      </div>
    );
  }
}

export default Movies;