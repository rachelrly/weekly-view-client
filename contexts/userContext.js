import React, {createContext, useState} from 'react'

export const UserContext = createContext()

export default function UserContextProvider({children}){
    /*This contains information on currently logged in user and handles login/logout*/
    const [userId, setUserId] = useState(null)
    const [error, setError] = useState(null)

    //logout function
    const processLogout = () => {
        TokenService.clearAuthToken();
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