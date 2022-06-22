import React, {useEffect, useContext} from 'react'
import apiUser from '../api/apiUser'; 
import apiClient from '../api/apiUser'
import { CancelToken } from 'apisauce';
import {AppContext} from '../context/AppContext';
import { useNavigate } from "react-router-dom";


export default function useEdit( newData) {
//get navigate
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()
    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (newData){
                (async()=>{
                    response = await apiClient.put(user.token, user.id, newData, source.token)
                    if (response){
                        setAlert({msg:`User: ${user} Edited`,user:'success'})
                    }else if(response === false && response !== undefined){
                        setAlert({msg:`Please reauthorize you account`,'cat':'warning'})
                        navigate('/')                    
                    }
                })()
            }
            return ()=>{source.cancel()}
        },[ user, newData]
    )
}

    











// const navigate = useNavigate();

// const {setUser} = useContext(AppContext)

//     const put = async (cancelToken)=>{
//         const response = await put(loginCreds.email, loginCreds.password,cancelToken)
//         console.log(response)
//         if(response.user?.token){
//             console.log('logged in');
//             setUser(response.user);
//             setLoginCreds({})
//             navigate("/horoscopes");

//             // navigate to the home page
//         }
//         setError(response.error);
//     }
    
    
//     useEffect(
//         ()=>{
//             const source = CancelToken.source()
//             if (loginCreds.email && loginCreds.password)
//             put(source.token)
//             return ()=>{source.cancel()}
//         },
//         [loginCreds,  setLoginCreds, setError, setUser]
//     )
    
// }