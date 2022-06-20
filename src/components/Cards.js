import {SelectSign} from './SelectSign';
import {SelectTimeFrame} from './SelectTimeFrame';
import Card from './Card';
import React, { useState} from 'react';



export default function Cards(){

  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(null);

  

  return(
    
    <div className="Cards">
      <h1>Horoscopes</h1>
      {!selectedSign && (
      <SelectSign onSignSelected={setSelectedSign}/>
      )}
      {selectedSign && !selectedTimeFrame && (
      <SelectTimeFrame 
      onTimeframeSelected={setSelectedTimeFrame}
      />
      )}
      {selectedSign && selectedTimeFrame && (
      <Card 
      sign={selectedSign} 
      timeframe={selectedTimeFrame}
      />
      )}
      </div>
      );
}