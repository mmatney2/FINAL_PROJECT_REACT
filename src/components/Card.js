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
import leo from '../assets/leo_sign.webp';
import sagittarius from '../assets/sagittarius.webp';


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
        {/* <p>Color: {props.data.color}</p>
        <p>Lucky Time: {props.data.lucky_time}</p>
        <p>Description: {props.data.description}</p>
        <p>Date Range: {props.data.date_range}</p>
        <p>Mood: {props.data.mood}</p>
        <p>compatibility: {props.data.compatibility}</p>
        <p>Current Date: {props.data.current_date}</p>
        <p>Lucky Number: {props.data.lucky_number}</p> */}
            

<Grid
container
spacing={1}
sx={{ m: 1, pr: 2, border: "1px solid", borderRadius: 1 }}
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
      <strong>Description:</strong>
    </Typography>
    <Typography variant="body1">{props.data.description}</Typography>
  </Item>
</Grid>
<Grid book sm={6} xs={6} md={6}>
  <Item sx={{ height: "100%" }}>
    <Typography variant="subtitle1">
      <strong>Lucky Time:</strong>
    </Typography>
    <Typography variant="body1">{props.data.lucky_time}</Typography>
  </Item>
</Grid>
<Grid book sm={6} xs={6} md={6}>
  <Item sx={{ height: "100%" }}>
    <Typography variant="subtitle1">
      <strong>Date Range:</strong>
    </Typography>
    <Typography variant="body1">{props.data.date_range}</Typography>
  </Item>
</Grid>
<Grid book sm={12} xs={12} md={12}>
  <Item sx={{ height: "100%" }}>
    <Typography variant="subtitle1">
      <strong>Mood:</strong>
    </Typography>
    <Typography variant="body1">{props.data.mood}</Typography>
  </Item>
</Grid>
<Grid book sm={12} xs={12} md={12}>
  <Item sx={{ height: "100%" }}>
    <Typography variant="subtitle1">
      <strong>Compatibility:</strong>
    </Typography>
    <Typography variant="body1">{props.data.compatibility}</Typography>
  </Item>
</Grid>
<Grid book sm={12} xs={12} md={12}>
  <Item sx={{ height: "100%" }}>
    <Typography variant="subtitle1">
      <strong>Current Time:</strong>
    </Typography>
    <Typography variant="body1">{props.data.current_date}</Typography>
  </Item>
</Grid>
<Grid book sm={12} xs={12} md={12}>
  <Item sx={{ height: "100%" }}>
    <Typography variant="subtitle1">
      <strong>Lucky Number:</strong>
    </Typography>
    <Typography variant="body1">{props.data.lucky_number}</Typography>
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
        case 'sagitarius': 
            console.log("CASE Sag");
            signImage = sagittarius;
            break;
        default:
            console.log("Selet sign Button")    
    }

    return (
        <div>
        <h2>{timeframe} your horoscope for {sign} is...
        </h2>
            {console.log(sign)}
         <SingleCard data={data} signImage={signImage} /> 
        </div>
    )
}


export default Card;