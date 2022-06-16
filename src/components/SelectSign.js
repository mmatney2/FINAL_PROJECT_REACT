import React from 'react';
// import {getSigns} from '../api/apiAztro';


export const SelectSign = ({onSignSelected}) => {
    // const [signs, setSigns] = useState([]);

    // useEffect(()=>{
    //     getSigns().then(setSigns);
    // }, []);

    return(
    <>
    <h2>Please select a sign</h2>
      {['Aries', 'Taurus', 'Gemini', 'Cancer', 'Virgo', 'Libra', 'Scorpio', 'Sagitarius', 'Capricorn', 'Aquarius', 'Pisces'].map((sign)=>(
        <button key={sign} 
        onClick={() => onSignSelected(sign)}
        >
        {sign}
        </button>
         
      ))}
    </>
 )}