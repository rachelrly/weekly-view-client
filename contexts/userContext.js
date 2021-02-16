import React, {createContext} from 'react'

export const UserContext = createContext()

export default function UserContextProvider({children}){

    const value = {}
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}