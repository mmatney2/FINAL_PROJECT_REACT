import React, {useEffect, useContext} from 'react'
import {put} from '../api/apiUser'; 
import { CancelToken } from 'apisauce';
import {AppContext} from '../context/AppContext';

export default function useEdit(loginCreds, setLoginCreds, setError) {
//get navigate
const {setUser} = useContext(AppContext)

    const put = async (cancelToken)=>{
        const response = await put(loginCreds.email, loginCreds.password,cancelToken)
        console.log(response)
        if(response.user?.token){
            console.log('logged in');
            setUser(response.user);
            setLoginCreds({})
            // navigate to the home page
        }
        setError(response.error);
    }
    
    
    useEffect(
        ()=>{
            const source = CancelToken.source()
            if (loginCreds.email && loginCreds.password)
            put(source.token)
            return ()=>{source.cancel()}
        },
        [loginCreds,  setLoginCreds, setError, setUser]
    )
    
}