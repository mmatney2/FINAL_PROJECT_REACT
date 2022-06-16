import React, { useState} from 'react';
import Aztro from './api/Aztro';
import Button from './components/Button';
import Error from './components/Error';
import Navbar from './components/Navbar';
import {getUser} from './api/apiBasicAuth';
import { CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
// import {getHoroscope} from './api/appAztro';
import {SelectSign} from './components/SelectSign';
import {SelectTimeFrame} from './components/SelectTimeFrame';
import {Horoscope} from './components/Horoscope';





// const handleAPITest=async ()=>{
//   const source = CancelToken.source();
//   const response_object=await getUser("m@m.com", "123", source.token);
//   console.log(response_object)
// }

function App(){

  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(null);

  const restart = () =>{
    setSelectedSign(null);
    selectedTimeFrame(null);
  }

  return(
    
    <div className="App">
      <h1>The Horoscope App</h1>
      {!selectedSign && (
      <SelectSign onSignSelected={setSelectedSign}/>
      )}
      {selectedSign && !selectedTimeFrame && (
      <SelectTimeFrame 
      onTimeframeSelected={setSelectedTimeFrame}
      />
      )}
      {selectedSign && selectedTimeFrame && (
      <Horoscope 
      sign={selectedSign} 
      timeframe={selectedTimeFrame}
      />
      )}
      <button onClick={restart}>Restart</button>
      </div>

    //   <Navbar>
    //     <Button color = "success" onClick={handleAPITest}>Test API Call</Button>
    //     <Error style={{backgroundColor:"cornflowerblue"}}>Error Message</Error>
    //     <Aztro/>
    //   <LoginForm/>
  );

}
export default App;
