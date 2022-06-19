import React, {useEffect, useContext} from 'react'
import {delUser} from '../api/apiUser'; 
import { CancelToken } from 'apisauce';
import {AppContext} from '../context/AppContext';
import {useNavigate} from 'react-router-dom';


export default function useDelete(user_id) {
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (user_id){
                (async()=>{
                    response = await delUser(user.token, user_id, source.token)
                    if (response){
                         setAlert({msg:`User: ${user_id} Deleted`, cat:'success'})
                    }else if(response === false && response !== undefined){
                         setAlert({msg:`Please reauthorize you account`, cat:'warning'})
                         navigate('/')
                    }
                })()
            }
            return ()=>{source.cancel()}
        },[user_id, user.token]
    )
}
