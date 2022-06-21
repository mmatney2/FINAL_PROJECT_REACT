import React, {useEffect, useContext} from 'react'
import apiUser from '../api/apiUser'; 
import apiClient from '../api/apiUser'

import { CancelToken } from 'apisauce';
import {AppContext} from '../context/AppContext';
import {useNavigate} from 'react-router-dom';


export default function useDelete() {
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (user){
                (async()=>{
                    response = await apiClient.del(user.token, source.token)
                    if (response){
                         setAlert({msg:`User: ${user} Deleted`, cat:'success'})
                    }else if(response === false && response !== undefined){
                         setAlert({msg:`Please reauthorize you account`, cat:'warning'})
                         navigate('/')
                    }
                })()
            }
            return ()=>{source.cancel()}
        },[user, user.token]
    )
}
