import React from 'react';
import '../App.css';

export const SelectTimeFrame = ({
    onTimeframeSelected,
})=>{
    return(
    <>
    <div className="SelectTimeFrame">
        <h2 id="h1">Please select a Day...</h2>
            <div className="grid2">
            {['today', 'tomorrow', 'yesterday'].map((timeframes)=>(
                <button id="daySize" className={timeframes}
                    key={timeframes} 
                    onClick={() => onTimeframeSelected(timeframes)}
                    >
                    {timeframes}
                </button>
                
            ))}
        </div>
      </div>
    </>
 )}
    