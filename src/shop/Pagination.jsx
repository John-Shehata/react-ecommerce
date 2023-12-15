import React from "react";

const Pagination = ({
  currentPage,
  numOfProducts,
  productsPerPage,
  paginatePages,
}) => {
  const pagesNumbers = [];
  const numberOfPages = Math.ceil(numOfProducts / productsPerPage);
  for (let i = 1; i <= numberOfPages; i++) {
    pagesNumbers.push(i);
  }

  // Map of page numbers and render it in pagination
  const renderPagesNumbers = pagesNumbers.map((pageNumber) => {
    return (
      <li
        key={pageNumber}
        className={`page-item ${pageNumber == currentPage ? "bg-warning" : ""}`}
      >
        <button
          onClick={() => paginatePages(pageNumber)}
          className="bg-transparent"
        >
          {pageNumber}
        </button>
      </li>
    );
  });
  return (
    <ul className="default-pagination lab-ul">
      <li>
        <a
          href="#"
          onClick={() => {
            if (currentPage > 1) {
              paginatePages(currentPage - 1);
            } 
          }}
        >
          <i className="icofont-rounded-double-left"></i>
        </a>
      </li>
      {renderPagesNumbers}
      <li>
        <a
          href="#"
          onClick={() => {
            if (currentPage < pagesNumbers.length) {
              paginatePages(currentPage + 1);
            }
          }}
        >
          <i className="icofont-rounded-double-right"></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
