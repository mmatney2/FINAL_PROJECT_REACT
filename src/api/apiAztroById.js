import React, { Component } from 'react';
import apiClient from './clientBasicAuth';


const endpoint= '/api/horoscope'


// How to get Horoscope by User Id -->

const getByUse = async(id, cancelToken)=>{
    let error;
    let horoscopes;
    const response = await clientBasicAuth(cancelToken).get(endpoint+'/user/'+id);
    if(response.ok){
        horoscopes=response.data.horoscopes
    }else{
        error = "An Unexpected Error has Occured. Please Try again Later."
    }
    return {
        error,
        horoscopes
    }
}

const apiClient = {
    
    getByUse
}
export default apiClient