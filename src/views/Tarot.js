import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import TarotCard from "../components/TarotCard";
import Box from '@mui/material/Box';
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import {Navigate} from 'react-router-dom'
// import Tarots from "../components/Tarots";


// import getTarot from '../api/appTarot'
export default function Horoscopes() {

return (
<>
<Box>
  <Typography variant="h4">
//
    </Typography>
      <TarotCard/>
</Box>
</>
  
)
}
