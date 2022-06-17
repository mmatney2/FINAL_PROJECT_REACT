import React, {useState, useEffect} from 'react';
import { getHoroscopes } from '../api/appAztro';


function SingleCard(props){
    if(props.data){
        return <p>{props.data.color}</p>
    }
}
 const Card = ({sign, timeframe})=>{
    const [horoscope, setHoroscope] = useState([]);
    let [data, setdata] = useState(null)

    useEffect(()=>{
        
       getHoroscopes(sign, timeframe).then((res)=> {
        console.log("check", res);
        setdata(res)
    });
     

    }, [timeframe]);


    return (
        <div>
        <h2>{timeframe}Your horoscope for {sign} is...
        </h2>
       <h1>HELLOWORLD</h1>

         <SingleCard data={data} /> 
        </div>
    )
}


export default Card;