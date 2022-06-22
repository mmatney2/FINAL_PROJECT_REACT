import React, { useEffect, useContext, useState } from "react";
import post from '../api/apiUser'; 
import apiClient from '../api/apiUser'
import { CancelToken } from 'apisauce';
import {AppContext} from '../context/AppContext';
import {useNavigate} from 'react-router-dom';


export default function useRegister(userID) {
    const navigate = useNavigate()
    const { user, setAlert } = useContext(AppContext);

    useEffect(()=>{
        let response;
        const source=CancelToken.source();
        
        const regUsers = async ()=>{
            console.log(userID);

            response = await apiClient.post(userID, source.token);
            console.log(response);
            if (response){
                setAlert({msg: `User: ${userID.first_name} created`, cat: "success"});
                console.log(response);
                navigate("/");
            }else if(response !==undefined && response === false){
                setAlert({msg: `Please Reauthorize your account`, cat: "warning"});
                navigate("/");
            }
        };
        if (userID?.first_name){
            regUsers();
        }
        return ()=>{
            source.cancel();
        };
    }, [userID]);
}
// }
//             userID 
//                 (async()=>{
//                     const response = await postUser(userID, source.token);
//                     setUser(response)
//                 })()
//         },
//         [userID]
//     )

//     return user

//     useEffect(
//         ()=>{
//             let response
//             const source = CancelToken.source()
//             if (user){
//                 (async()=>{
//                     response = await postUser(user.first_name, source.token)
//                     if (response){
//                         setAlert({msg:`user: ${user.first_name} Created`, cat: 'success'})
//                     }else if(response === false && response !== undefined){
//                         setAlert({msg:`Please reauthorize you account`, cat:'warning'})
//                         navigate('/login')
//                     }
//                 })()
//             }
//             return ()=>{source.cancel()}
//         },[user, user?.token]
//     )
// }

//get navigate
//     const register = async (cancelToken, loginCreds)=>{
//         const response = await postUser(loginCreds.email, loginCreds.password,cancelToken)
//         console.log(response)
//         if(response.user?.token){
//             console.log('logged in');
//             setUser(response.user);
//             setLoginCreds({})
//             navigate('/')
//             // navigate to the home page
//         }
//         setError(response.error);
//     }
    
    
//     useEffect(
//         ()=>{
//             const source = CancelToken.source()
//             if (loginCreds.email && loginCreds.password)
//             register(source.token, loginCreds)
//             return ()=>{source.cancel()}
//         },
//         [loginCreds,  setLoginCreds, setError, setUser]
//     )
    
