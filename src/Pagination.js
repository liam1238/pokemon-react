import React from 'react';
import Button from './ui/button';

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (  
    <div className='pl-3 text-center'>
        {goToPrevPage && <Button text="Previeus" onClick={goToPrevPage}/> }
        {goToNextPage && <Button text="Next" onClick={goToNextPage}/> }
    </div>
  )
}
