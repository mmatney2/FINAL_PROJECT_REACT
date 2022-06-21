import React, {useState, useEffect} from 'react';
import { getHoroscopes } from '../api/appAztro';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useParams } from "react-router-dom";
import Error from "./Error";
import { CircularProgress } from "@mui/material";
import leo from '../assets/leo.jpg';
import sagittarius from '../assets/sagittarius.webp';
import libra from '../assets/libra.jpg';
import aquarius from '../assets/aquarius.jpg';
import aries from '../assets/aries.jpg';
import cancer from '../assets/cancer.jpg';
import gemini from '../assets/gemini.jpg';
import pisces from '../assets/pisces.jpg';
import scorpio from '../assets/scorpio.jpg';
import taurus from '../assets/taurus.jpg';
import virgo from '../assets/virgo.jpg';
import capricorn from '../assets/capricorn.jpg';
import '../App.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function SingleCard(props){
    
    if(props.data){
        
        return( 
    <>
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
     src={props.signImage}
    />
  </Item>
</Grid>
<Grid book sm={12} xs={12} md={12}>
  <Item sx={{ height: "100%", alignContent: "center" }}>
    <Typography variant="subtitle1">
      <h1><strong>Description:</strong></h1>
    </Typography>
    <Typography variant="body1"><h3>{props.data.description}</h3></Typography>
  </Item>
</Grid>
<Grid book sm={6} xs={6} md={6}>
  <Item sx={{ height: "100%" }}>
    <Typography variant="subtitle1">
    <h1><strong>Lucky Time:</strong></h1>
    </Typography>
    <Typography variant="body1"><h3>{props.data.lucky_time}</h3></Typography>
  </Item>
</Grid>
<Grid book sm={6} xs={6} md={6}>
  <Item sx={{ height: "100%" }}>
    <Typography variant="subtitle1">
    <h1><strong>Date Range:</strong></h1>
    </Typography>
    <Typography variant="body1"><h3>{props.data.date_range}</h3></Typography>
  </Item>
</Grid>
<Grid book sm={12} xs={12} md={12}>
  <Item sx={{ height: "100%" }}>
    <Typography variant="subtitle1">
    <h1><strong>Mood:</strong></h1>
    </Typography>
    <Typography variant="body1"><h3>{props.data.mood}</h3></Typography>
  </Item>
</Grid>
<Grid book sm={12} xs={12} md={12}>
  <Item sx={{ height: "100%" }}>
    <Typography variant="subtitle1">
    <h1><strong>Compatibility:</strong></h1>
    </Typography>
    <Typography variant="body1"><h3>{props.data.compatibility}</h3></Typography>
  </Item>
</Grid>
<Grid book sm={12} xs={12} md={12}>
  <Item sx={{ height: "100%" }}>
    <Typography variant="subtitle1">
    <h1><strong>Current Date:</strong></h1>
    </Typography>
    <Typography variant="body1"><h3>{props.data.current_date}</h3></Typography>
  </Item>
</Grid>
<Grid book sm={12} xs={12} md={12}>
  <Item sx={{ height: "100%" }}>
    <Typography variant="subtitle1">
    <h1><strong>Lucky Number:</strong></h1>
    </Typography>
    <Typography variant="body1"><h3>{props.data.lucky_number}</h3></Typography>
  </Item>
</Grid>
</Grid>
</>
        )
    }
}
 const Card = ({sign, timeframe})=>{
    //const [horoscope, setHoroscope] = useState([]);
    let signImage;
    let [data, setdata] = useState(null)

    useEffect(()=>{
        
       getHoroscopes(sign, timeframe).then((res)=> {
        console.log("check", res);
        setdata(res)
    });
     

    }, [timeframe]);

    switch(sign){
        case 'leo': 
            console.log("CASE LEO");
            signImage = leo;
            break;
        case 'sagittarius': 
            console.log("CASE Sag");
            signImage = sagittarius;
            break;
        case 'aquarius': 
            console.log("CASE Aq");
            signImage = aquarius;
            break;
        case 'aries': 
            console.log("CASE Air");
            signImage = aries;
            break;
        case 'cancer': 
            console.log("CASE Can");
            signImage = cancer;
            break;
        case 'capricorn': 
            console.log("CASE Cap");
            signImage = capricorn;
            break;
        case 'gemini': 
            console.log("CASE Gem");
            signImage = gemini;
            break;
        case 'libra': 
            console.log("CASE Lib");
            signImage = libra;
            break;
        case 'pisces': 
            console.log("CASE Pis");
            signImage = pisces;
            break;
        case 'scorpio': 
            console.log("CASE Sco");
            signImage = scorpio;
            break;
        case 'taurus': 
            console.log("CASE Tau");
            signImage = taurus;
            break;
        case 'virgo': 
            console.log("CASE Vir");
            signImage = virgo;
            break;
        default:
            console.log("Selet sign Button")    
    }

    return (
        <div>
        <h2 id="h1">{timeframe} your horoscope for {sign} is...
        </h2>
            {console.log(sign)}
         <SingleCard data={data} signImage={signImage} /> 
        </div>
    )
}


export default Card;