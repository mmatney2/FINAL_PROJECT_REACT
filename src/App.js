import React, { useState} from 'react';
// import Aztro from './app/Aztro';
import Cards from './components/Cards';
import Error from './components/Error';
import Navbar from './components/Navbar';
import {getUser} from './api/apiBasicAuth';
import { delUser, putUser, postUser} from './api/apiUser'
import { CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
// import {getHoroscope} from './api/appAztro';
import {SelectSign} from './components/SelectSign';
import {SelectTimeFrame} from './components/SelectTimeFrame';
import {Horoscope} from './components/Card';
import Button from './components/Button';
// import post from '.api/apiUser';





const my_token="1Xm3pKcsOzf27rTdhejwPmY1nnptCf5PXJEBNHeVNnQ"
const handleAPITest=async ()=>{
  const source = CancelToken.source();
  const response_object=await putUser(
   my_token, 6,"e@g.com","e","e", "123", 
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
     </Navbar>
        </div>
   </>
)
      
}
export default App;
