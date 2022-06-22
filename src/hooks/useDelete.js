import React, {useEffect, useContext} from 'react'
import apiUser from '../api/apiUser'; 
import apiClient from '../api/apiUser'

import { CancelToken } from 'apisauce';
import {AppContext} from '../context/AppContext';
import {useNavigate} from 'react-router-dom';


export default function useDelete(user) {
    const { setAlert} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (user.token){
                (async()=>{
                    response = await apiClient.del(user.token,  source.token)
                    if (response){
                        console.log(response)
                         setAlert({msg:`User: ${user} Deleted`, cat:'success'})
                         console.log(response)
                         navigate('/register')

                    }else if(response === false && response !== undefined){
                         setAlert({msg:`Please reauthorize you account`, cat:'warning'})
                         navigate('/login')
                    }
                })()
            }
            console.log(response)

            return ()=>{source.cancel()}

        },[user]
    )
}
