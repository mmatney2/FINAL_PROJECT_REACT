// import React from 'react';



export const getHoroscopes = (sign, timeframe) => {
    console.log(sign,timeframe);
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${timeframe}`;
   return fetch(URL, {
        method: 'POST'
    }).then(response => response.json());
};


