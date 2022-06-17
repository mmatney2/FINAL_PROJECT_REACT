import {SelectSign} from './SelectSign';
import {SelectTimeFrame} from './SelectTimeFrame';
import {Card} from './Card';
import React, { useState} from 'react';



export default function Cards(){

  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(null);

  const restart = () =>{
    setSelectedSign(null);
    selectedTimeFrame(null);
  }

  return(
    
    <div className="Cards">
      <h1>The Horoscope App</h1>
      {!selectedSign && (
      <SelectSign onSignSelected={setSelectedSign}/>
      )}
      {selectedSign && !selectedTimeFrame && (
      <SelectTimeFrame 
      onTimeframeSelected={setSelectedTimeFrame}
      />
      )}
      {selectedSign && selectedTimeFrame && (
      <Cards 
      sign={selectedSign} 
      timeframe={selectedTimeFrame}
      />
      )}
      <button onClick={restart}>Restart</button>
      </div>
);
      }