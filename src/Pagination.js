import React from 'react';


export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      {goToPrevPage && <button onClick={goToPrevPage}>Previus</button>}
      <button onClick={goToNextPage}>Next</button>
    </div>
  )
}
