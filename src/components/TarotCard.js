import React, {useState, useEffect} from 'react';

import { App } from '../api/appTarot';

function SingleTarot(props){    
    if(props.data){        
        return( 
            <>           
        <p>Color: {props.data.cards[0].name}</p>
        {/* <p>Lucky Time: {props.data.lucky_time}</p>
        <p>Description: {props.data.description}</p>
        <p>Date Range: {props.data.date_range}</p>
        <p>Mood: {props.data.mood}</p>
        <p>compatibility: {props.data.compatibility}</p>
        <p>Current Date: {props.data.current_date}</p>
        <p>Lucky Number: {props.data.lucky_number}</p>  */}
        </>
        )}}
const TarotCard = ({})=>{
    //const [horoscope, setHoroscope] = useState([]);
    const [tarot, setTarot] = useState('')


useEffect(()=>{
    fetch(`https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10/api/v1/cards/random`)
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        // handle ten random cards
        setTarot(response);
        console.log(response)
    })}, []);
   
    return (
        <div>
        
         <SingleTarot data={tarot} /> 
        </div>
    )
        }

export default TarotCard;