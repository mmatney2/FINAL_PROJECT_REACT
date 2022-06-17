import React, {useState, useEffect} from 'react';
import { getHoroscopes } from '../api/appAztro';


function Card(props){
    return <p>{props.data.color}</p>
}

export const Horoscope = ({sign, timeframe})=>{
    const [horoscope, setHoroscope] = useState([]);
    let [data, setdata] = useState(null)

    useEffect(()=>{
        
       getHoroscopes(sign, timeframe).then((res)=> {
        console.log(res);
        setdata(res)
    });
     

    }, [sign,timeframe]);


    return (
        <div>
        <h2>{timeframe}Your horoscope for {sign} is...
        </h2>
        {horoscope}
         {/* <Card data={data} />  */}
        </div>
    )
}