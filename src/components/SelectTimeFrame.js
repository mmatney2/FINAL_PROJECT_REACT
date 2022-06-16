import React from 'react';

export const SelectTimeFrame = ({
    onTimeframeSelected,
})=>{
    return(
        <>
        <h2>Please select a TimeFrame</h2>
      {['Today', 'Tomorrow', 'yesterday'].map((timeframes)=>(
        <button 
        key={timeframes} 
        onClick={() => onTimeframeSelected(timeframes)}
        >
        {timeframes}
        </button>
         
      ))}
    </>
 )}
    