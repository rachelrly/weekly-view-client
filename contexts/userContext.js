import React, {createContext, useState} from 'react'
import TokenService from '../services/token-service'

export const UserContext = createContext()

export default function UserContextProvider({children}){
    
    const {TOKEN_KEY} = process.env;
    /*This contains information on currently logged in user and handles login/logout*/
    const [userId, setUserId] = useState(null)
    const [error, setError] = useState(null)

    //logout function
    const processLogout = () => {
        TokenService.clearAuthToken(TOKEN_KEY);
        setUserId(null);
    };

    const addUserId = (id) => {
        setUserId(id);
    };

    const getUserId = () => {
        return userId;
    };


    const value = {
        processLogout,
        addUserId,
        getUserId
    }
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}