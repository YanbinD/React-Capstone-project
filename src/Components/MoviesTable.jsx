import React, { Component } from "react";
import Like from "./common/Like";
import Table from "./common/Table";

class MovieTable extends Component {
  // this will not be changed so does not have to be state
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: m => (
        <Like liked={m.liked} onLikeClick={() => this.props.onLike(m)} />
      )
    },
    {
      key: "delete",
      content: m => (
        <button
          onClick={() => this.props.onDelete(m._id)}
          className="btn btn-danger btn-sm"
        >
          delete
        </button>
      )
    }
    // the content attritube reference to an arrow function that takes in the movie object from the map function in table body upon rendering, 
    // the arrow function will return 
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        data={movies}
        onSort={onSort}
      />
    );
  }
}

export default MovieTable;

// <tbody>
// {movies.map(movie => (
//   <tr key={movie.title}>
//     <td>{movie.title}</td>
//     <td>{movie.genre.name}</td>
//     <td>{movie.numberInStock}</td>
//     <td>{movie.dailyRentalRate}</td>
//     <td>
//       <Like liked={movie.liked} onLikeClick={() => onLike(movie)} />
//     </td>
//     <td>
//   <button
//     onClick={() => onDelete(movie._id)}
//     className="btn btn-danger btn-sm"
//   >
//     delete
//   </button>
//     </td>
//   </tr>
// ))}
// </tbody>
