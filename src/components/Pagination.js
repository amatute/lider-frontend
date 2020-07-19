import React from "react";

const Pagination = ({ pages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(page => (
          <li key={page} className="page-item">
            <button onClick={() => paginate({page})}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
