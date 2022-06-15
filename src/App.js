import React from 'react';
import Aztro from './api/Aztro';
import Button from './components/Button';
import Error from './components/Error';
import Navbar from './components/Navbar';
import {getUser} from './api/apiBasicAuth';
import { CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';



const handleAPITest=async ()=>{
  const source = CancelToken.source();
  const response_object=await getUser("marquitamatney@gmail.com", "123", source.token);
  console.log(response_object)
}

function App(){
  return(
      <Navbar>
        <Button color = "success" onClick={handleAPITest}>Test API Call</Button>
        <Error style={{backgroundColor:"cornflowerblue"}}>Error Message</Error>
        <Aztro/>
      <LoginForm/>
    </Navbar>
  );

}
export default App;
