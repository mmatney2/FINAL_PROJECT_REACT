import React from 'react';
import '../App.css';
// import {getSigns} from '../api/apiAztro';


export const SelectSign = ({onSignSelected}) => {
    // const [signs, setSigns] = useState([]);

    // useEffect(()=>{
    //     getSigns().then(setSigns);
    // }, []);

    return(
    <>
    <div className="SelectSign">
    <h2 id="h1">Choose Your Sign...</h2>
    <div className="grid">
      {['aries', 'taurus', 'gemini', 'cancer', 'leo','virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'].map((sign, i)=>{
      
    return(
    <button id="size" className={sign} key={sign} onClick={() => onSignSelected(sign)}>
      {sign}
      </button>
      )
         
      })}
      </div>
      </div>
    </>
 )}