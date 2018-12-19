import React, { Component } from "react";

// interface
// column : array
// sortColumn : object
// onSort: function

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    //raise the event here
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;

    const sortArrowClassName = "fa fa-sort-".concat(sortColumn.order);
    return <i className={sortArrowClassName} aria-hidden="true" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns
            .filter(c => c.label)
            .map(column => (
              <th
                className="clickable"
                key={column.key || column.path}
                onClick={() => this.raiseSort(column.path)}
              >
                {column.label}
                {this.renderSortIcon(column)}
              </th>
            ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
