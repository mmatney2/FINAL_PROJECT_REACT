// import React from 'react';



export const getHoroscopes = (sign, timeframe) => {
    console.log(sign,timeframe);
    // fetch(
    //     // `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}`
    //     `https://aztro.sameerkumar.website/?sign=aries&day=today/`,{
    //         method: 'POST'
    //     }
    // ).then((response)=> console.log(response));
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${timeframe}`;
   return fetch(URL, {
        method: 'POST'
    }).then(response => response.json());
};




// import React, { Component } from 'react';
// import apiClient from './clientBasicAuth';


// const endpoint= '/api/horoscope'


// // How to get Horoscope by User Id -->

// const getByUse = async(id, cancelToken)=>{
//     let error;
//     let horoscopes;
//     const response = await clientBasicAuth(cancelToken).get(endpoint+'/user/'+id);
//     if(response.ok){
//         horoscopes=response.data.horoscopes
//     }else{
//         error = "An Unexpected Error has Occured. Please Try again Later."
//     }
//     return {
//         error,
//         horoscopes
//     }
// }

// const apiClient = {
    
//     getByUse
// }
// export default apiClient