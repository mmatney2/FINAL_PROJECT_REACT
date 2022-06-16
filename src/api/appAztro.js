// import React from 'react';



export const getHoroscopes = (sign, timeframe) => {
    return fetch(
        `http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}`
        // `https://aztro.sameerkumar.website/?sign=${sign}&day=${timeframe}/`
    ).then((response)=> response.json())
    .then(({horoscope}) => horoscope);
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