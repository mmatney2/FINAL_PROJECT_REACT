import React, {useState, useEffect} from 'react';
import { getHoroscopes } from '../api/appAztro';


export const Horoscope = ({sign, timeframe})=>{
    const [horoscope, setHoroscope] = useState([]);

    useEffect(()=>{
        getHoroscopes(sign, timeframe).then(setHoroscope);
    }, [sign, timeframe]);


    return <div>
        <h2>{timeframe}Your horoscope for {sign} is...
        </h2>
        {horoscope}
        </div>
}