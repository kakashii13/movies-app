import React from "react";
import "../style/components/Pagination.css";

const Pagination = ({ movies, moviesPerPage, currentPage, setCurrentPage }) => {
  const numberPagination = [];

  for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
    numberPagination.push(i);
  }

  const handlePagination = (number) => {
    setTimeout(() => {
      setCurrentPage(number);
    }, 1000);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
      }, 1000);
    }
  };

  const firstPage = () => {
    if (currentPage > 2) {
      setTimeout(() => {
        setCurrentPage(1);
      }, 1000);
    }
  };

  const nextPage = () => {
    if (currentPage < numberPagination.length) {
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
      }, 1000);
    }
  };

  const lastPage = () => {
    setCurrentPage(numberPagination.length);
  };

  return (
    <ul className="pagination">
      {currentPage > 2 && (
        <li className="pagination-item">
          <a className="pagination-link" href="#" onClick={firstPage}>
            « First
          </a>
        </li>
      )}
      {currentPage > 1 && (
        <li className="pagination-item">
          <a className="pagination-link" href="#" onClick={prevPage}>
            « Prev
          </a>
        </li>
      )}
      {numberPagination.map((number) => (
        <li key={number} className="pagination-item">
          <a
            className={`pagination-link ${
              number === currentPage && "pagination-link-focus"
            }`}
            href="#"
            onClick={() => handlePagination(number)}
          >
            {number}
          </a>
        </li>
      ))}
      {currentPage < numberPagination.length && (
        <li className="pagination-item">
          <a className="pagination-link" href="#" onClick={nextPage}>
            Next »
          </a>
        </li>
      )}
      {currentPage < numberPagination.length && (
        <li className="pagination-item">
          <a className="pagination-link" href="#" onClick={lastPage}>
            Last »
          </a>
        </li>
      )}
    </ul>
  );
};

export { Pagination };
