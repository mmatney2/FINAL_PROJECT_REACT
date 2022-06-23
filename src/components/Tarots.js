
import Tarot from './Tarot';

import SelectTarotCard from './SelectTarotCard';
import TarotCard from './TarotCard';
import React, { useState} from 'react';
import horoscope_today from '../assets/horoscope_today.webp';
import '../App.css';



export default function Tarots(){

  const [selectedTarot, setSelectedTarot] = useState(null);

  

  return(
    <>

    <div className="Tarots">
      {/* <img src ={horoscope_today}/> */}

      <h1 id="h1">Tarot Cards</h1>
      {!selectedTarot && (
      <SelectTarotCard onTarotSelected={setSelectedTarot}/>
      )}
      {/* {selectedTarot && !selectedTimeFrame && (
      <SelectTimeFrame 
      onTimeframeSelected={setSelectedTimeFrame}
      />
      )} */}
      {selectedTarot (
      <TarotCard
      tarot={selectedTarot} 
    //   timeframe={selectedTimeFrame}
      />
      )}
      </div>
      </>
      );
}