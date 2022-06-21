import React, { useState, Component} from 'react';
// import Aztro from './app/Aztro';
// import Cards from './components/Cards';
import Error from './components/Error';
import Navbar from './components/Navbar';
import {getUser} from './api/apiBasicAuth';
import apiClient from './api/apiUser'
import { CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
import RegForm from './forms/RegisterForm';
// import {getHoroscope} from './api/appAztro';
import {SelectSign} from './components/SelectSign';
import {SelectTimeFrame} from './components/SelectTimeFrame';
// import {Card} from './components/Card';
import Button from './components/Button';
import Logout from "./views/Logout";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Edit from "./views/Edit";
import Horoscopes from './views/Horoscopes';
import Horoscope from './views/Horoscope';
import Tarot from './views/Tarot';
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import horoscope_today from './assets/horoscope_today.webp';



const HomePage = () => {
  const {user}=useContext(AppContext)

  return<> <h2 id="h1"color="white"textalign="center" >Please Click on Menu to Choose Your Path....</h2><img src ={horoscope_today}height="250px"align="center"/></>

};


const my_token="TWksnjcI1sgUQsZmM5LdRhZMNONYsj4EWGfFTxdWFf8"
const handleAPITest=async ()=>{
  const source = CancelToken.source();
  let data={"email": "f@f.com",
  "first_name": "f",
  "password":"123",
  "last_name": "f",
  "id": 7}
  const response_object=await apiClient.del(my_token,
    source.token
    );
  console.log(response_object);
};


function App(){
  const { user } = useContext(AppContext);
   {
    const myStyle={
        backgroundImage: 
 "url('https://wallpaperaccess.com/full/353239.jpg')",
        height:'100%',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize:'auto',
        backgroundRepeat: 'no-repeat',
    };
    return(
      <>
        <Navbar>
        <Box sx={{minHeight:'90vh'}}>
         <Button color = "success" onClick={handleAPITest}>Test API Call</Button><div style={myStyle}>
         

          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/" element={<HomePage/>}/>
            <Route path="/horoscopes" element={<Horoscopes/>}/>
            {/* <Route path="/horoscope" element={<Horoscope/>}/> */}
            <Route path="/edit" element={<Edit/>}/>
            <Route path="/logout" element={<Logout/>}/>
            {/* <Route path="/tarot" element={<Tarot/>}/> */}
         </Routes></div>
         </Box>
         {/* {user?.is_admin ? <HomePage/> : <Login/> && <Register/>} */}
         
   
     </Navbar>
     

   </>
)
    }
  }     

export default App;
