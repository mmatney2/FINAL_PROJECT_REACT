import React from 'react';

export const SelectTimeFrame = ({
    onTimeframeSelected,
})=>{
    return(
    <>
    <div className="SelectTimeFrame">
        <h2>Please select a TimeFrame</h2>
            <div className="grid2">
            {['today', 'tomorrow', 'yesterday'].map((timeframes)=>(
                <button className="time"
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
    