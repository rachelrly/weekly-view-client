import React, {createContext} from 'react'

export const UserContext = createContext()

export default function UserContextProvider({children}){
    /*This contains information on currently logged in user and handles login/logout*/

    const value = {}
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}