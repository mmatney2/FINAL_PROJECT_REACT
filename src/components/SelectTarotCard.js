import React from 'react';
import '../App.css';

export const SelectTarotCard = ({onTarotSelected}) => {
    // const [signs, setSigns] = useState([]);

    // useEffect(()=>{
    //     getSigns().then(setSigns);
    // }, []);

    return(
    <>
    <div className="SelectTarotCard">
    <h2 id="h1">Choose Your Sign...</h2>
    <div id= "tarot" className="grid">
      {['1', '2', '3', '4', '5','6', '7', '8', '9', '10', 
      '11', '12', '13', '14', '15','16', '17', '18', '19', '20', 
      '21', '22', '23', '24', '25','26', '27', '28', '29', '30'].map((tarot, i)=>{
      
    return(
    <button id="size" className={tarot} key={tarot} onClick={() => onTarotSelected(tarot)}>
      {tarot}
      </button>
      )
         
      })}
      </div>
      </div>
    </>
 )} 