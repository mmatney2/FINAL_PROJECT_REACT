import React, {useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { App } from '../api/appTarot';
import tarotImg from '../assets/tarot.jpg';
import '../App.css';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

function SingleTarot(props){    
    if(props.data){        
        return( 
            <>           
        <p id="h1"><strong>Tarot Warning:</strong> </p>
        <p id="h1">{props.data[0].name}</p>
        <p id="h1">{props.data[0].meaning_rev}</p>
        <p id="h1">{props.data[0].suit}</p>
        <p id="h1">{props.data[0].value}</p>
        <p id="h1">{props.data[0].type}</p>



        {/* <p>Lucky Time: {props.data.lucky_time}</p>
        <p>Description: {props.data.description}</p>
        <p>Date Range: {props.data.date_range}</p>
        <p>Mood: {props.data.mood}</p>
        <p>compatibility: {props.data.compatibility}</p>
        <p>Current Date: {props.data.current_date}</p>
        <p>Lucky Number: {props.data.lucky_number}</p>  */}
        
<Grid
container
spacing={1}
sx={{fontSize:40, m: 1, pr: 2, border: "10px solid", borderRadius: 1 }}
>
<Grid book sm={12} xs={12} md={12}>
  <Item sx={{ display: "flex", justifyContent: "center" }}>
    <Avatar
      alt={props.data.color}
      sx={{ height: "30%", width: "30%" }}
      variant="rounded"
     src={props.tarotImage}
    //  img={}
    />
  </Item>
</Grid>
</Grid>
</>
        )
    }
}
    
const TarotCard = ({})=>{
    //const [horoscope, setHoroscope] = useState([]);
    const [tarot, setTarot] = useState('')
    let tarotImage;

useEffect(()=>{
    fetch(`https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10`)
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
       // handle ten random cards
       let myArray= response.cards.slice(0,10);
        setTarot(myArray); 
        console.log("MY ARRAY", myArray);
    })}, []);

    // switch(tarot[0].name){
    //     case "Four of Cups": 
    //         console.log("Four of Cups");
    //         tarotImage = tarot;
    //         break;
    //     default:
    //         console.log("Selet sign Button")    
    //  }
    
   
    return (
        <div>
        <h2 id='h1'>For Now, Your Tarot Is:</h2>
        <h6 id="h1">(Please Refresh page to start again)</h6>
        {console.log(tarot)}
         <SingleTarot data={tarot} tarotImage={tarotImg}/> 
        </div>
    )
        }

export default TarotCard;