import React from 'react';
import '../App.css';

export const SelectTarot = ({onTarotSelected}) => {
    // const [signs, setSigns] = useState([]);

    // useEffect(()=>{
    //     getSigns().then(setSigns);
    // }, []);

    return(
    <>
    <div className="SelectSign">
    <h2 id="h1">Choose Your Sign...</h2>
    <div id= "signgrid" className="grid">
      {['1', '2', '3', '4', '5','6', '7', '8', '9', '10'].map((num, i)=>{
      
    return(
    <button id="size" className={num} key={num} onClick={() => onTarotSelected(num)}>
      {num}
      </button>
      )
         
      })}
      </div>
      </div>
    </>
 )} 