import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const { movieCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = movieCount / pageSize;

  if (pageCount < 1) {
    return null;
  }

  const pages = _.range(1, pageCount + 1);

  // use active class to highlight the current page
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <li onClick={() => onPageChange(page)} className="page-link">
              {" "}
              {page}{" "}
            </li>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  movieCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
