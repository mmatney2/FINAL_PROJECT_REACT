import {SelectSign} from './SelectSign';
import {SelectTimeFrame} from './SelectTimeFrame';
import Card from './Card';
import React, { useState} from 'react';
import horoscope_today from '../assets/horoscope_today.webp';
import '../App.css';



export default function Cards(){

  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(null);

  

  return(
    <>

    <div className="Cards">
      {/* <img src ={horoscope_today}/> */}

      <h1 id="h1">Horoscopes</h1>
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
      </>
      );
}