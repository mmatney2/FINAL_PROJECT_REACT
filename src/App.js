import React, { useState, Component} from 'react';
// import Aztro from './app/Aztro';
// import Cards from './components/Cards';
import Error from './components/Error';
import Navbar from './components/Navbar';
import {getUser} from './api/apiBasicAuth';
import { delUser, putUser, postUser} from './api/apiUser'
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



const HomePage = () => {

  return <h1 color="white">Please Click on Menu to Choose Your Path....</h1>;
};


const my_token="l3tKyac27GMqMNo_de2kKbNj052TL0Px7TmDXu4ecTM"
const handleAPITest=async ()=>{
  const source = CancelToken.source();
  let data={"email": "b@b.com",
  "first_name": "bb",
  "password":"123",
  "last_name": "bb"}
  const response_object=await putUser(my_token, 7,data,
    source.token
    );
  console.log(response_object);
};


function App(){
  const { user } = useContext(AppContext);
   {
    const myStyle={
        backgroundImage: 
 "url('https://img.freepik.com/free-photo/astrology-horoscope-pattern-texture-background-graphic-design_41691-3225.jpg?w=900')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return(
      <>
        <Navbar>
        <Box sx={{minHeight:'90vh'}}>
         <Button color = "success" onClick={handleAPITest}>Test API Call</Button>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/" element={<HomePage/>}/>
            <Route path="/horoscopes" element={<Horoscopes/>}/>
            {/* <Route path="/horoscope" element={<Horoscope/>}/> */}
            <Route path="/edit" element={<Edit/>}/>
            <Route path="/logout" element={<Logout/>}/>
            {/* <Route path="/tarot" element={<Tarot/>}/> */}
         </Routes>
         {/* <div style={myStyle}></div> */}
         </Box>
         {/* {user?.is_admin ? <HomePage/> : <Login/> && <Register/>} */}
         
   
     </Navbar>
     

   </>
)
    }
  }     

export default App;
