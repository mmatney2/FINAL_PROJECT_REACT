



// export const getTarots = () => {
//     console.log();
//     const URL = `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10/api/v1/cards/random`;
//    return fetch(URL, {
//         method: 'POST'
//     }).then(response => response.json());
// };

import { useEffect, useState } from "react";



export  function App(){
const [tarot, setTarot] = useState('')


useEffect(()=>{
    fetch(`https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10/api/v1/cards/random`)
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        // handle ten random cards
        setTarot(response);
        console.log(response)
    }, [tarot])
    console.log()
    .catch(function (error) {
        // handle what went wrong
        console.log("there was an error")
    });
})
}
