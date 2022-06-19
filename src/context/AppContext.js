import {createContext, useEffect, useReducer, useState} from "react";


export const AppContext = createContext();

const AppContextProvider=({children})=>{
    const getUserFromLS = ()=>{
        let user = localStorage.getItem('user');
        if(user){
            return JSON.parse(user)
        }
    }
    const [user, _setUser] = useState(getUserFromLS())
    const [alert, setAlert] = useState({});


    const setUser =(user)=>{
        localStorage.setItem('user', JSON.stringigy(user))
        _setUser(user)
    }

    const values = (
        user,
        setUser,
        alert,
        setAlert
    )

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;