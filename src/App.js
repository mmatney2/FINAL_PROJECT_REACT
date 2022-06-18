import React, { useState} from 'react';
// import Aztro from './app/Aztro';
import Cards from './components/Cards';
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
import {Horoscope} from './components/Card';
import Button from './components/Button';





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
    return(
      <>
        <div>
          <Navbar>
         <Button color = "success" onClick={handleAPITest}>Test API Call</Button>
         <Cards/>
         <Error style={{backgroundColor:"cornflowerblue"}}>Error Message</Error>
       <LoginForm/>
       {/* <RegisterForm/> */}
     </Navbar>
        </div>
   </>
)
      
}
export default App;
