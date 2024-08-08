import React from 'react';

const Pagination = ({ postsPerPage, currentPage, length , handlePagination}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    paginationNumbers.push(i);
  }



  return (
    <div className='pagination'>
      {paginationNumbers.map((pageNumber) => (
        <button
            key={pageNumber}
            className={currentPage === pageNumber ? 'active' : ''}
            onClick={() => handlePagination(pageNumber)}
        >
            {pageNumber}
            
        </button>
))}

      
      
    </div>
  );
};

export default Pagination;
