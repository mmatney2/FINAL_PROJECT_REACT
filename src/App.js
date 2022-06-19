import React, { useState, Component} from 'react';
// import Aztro from './app/Aztro';
// import Cards from './components/Cards';
import Error from './components/Error';
import Navbar from './components/Navbar';
import {getUser} from './api/apiBasicAuth';
import { delUser, putUser, postUser} from './api/apiUser'
import { CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
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

  return <h1>Please Select Your Sign...</h1>;
};


const my_token="kbAR59N2PiS-in9KfVQHU0rxv4nqOfyaCdZxVY9gYPo"
const handleAPITest=async ()=>{
  const source = CancelToken.source();
  // let data={"email": "c@c.com",
  // "first_name": "a",
  // "password":"1234",
  // "last_name": "a"}
  const response_object=await delUser(my_token, 3,
    source.token
    );
  console.log(response_object);
};


function App(){
  const { user } = useContext(AppContext);
   {
    const myStyle={
        backgroundImage: 
 "url('https://media2.fdncms.com/pittsburgh/imager/u/original/20572714/robbrezsny-freewillastrology-horoscope_1_.jpg')",
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
         {/* <div style={myStyle}></div> */}
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/horoscopes" element={<Horoscopes/>}/>
            <Route path="/horoscope" element={<Horoscope/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/edit" element={<Edit/>}/>
            <Route path="/logout" element={<Logout/>}/>
            {/* <Route path="/tarot" element={<Tarot/>}/> */}
         </Routes>
         </Box>
         
   
     </Navbar>
   </>
)
    }
  }     

export default App;
