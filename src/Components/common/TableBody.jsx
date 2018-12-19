import React, { Component } from "react";

class TableBody extends Component {
  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(dataItem => (
          <tr>
          {columns.map(column => (
            <td>{column.label}</td>
          ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
