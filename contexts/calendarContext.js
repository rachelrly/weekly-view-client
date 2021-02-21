import React, {createContext} from 'react'

export const CalendarContext = createContext()

export default function CalendarContextProvider({children}){
    //if data left, set showleft to true, otherwise, showright true
    //
//this context contains the data for individual calendar
//and controls calendar layout
//tracks refs???
//holds all data, controlls what is displayed? 
//c
    const value = {}

    return (
    <CalendarContext.Provider value={value}>
        {children}
    </CalendarContext.Provider>
    )
}