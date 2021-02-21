import React from 'react'
import CalendarItem from './CalendarItem'

export default function CalendarDay({day, schedule}){
    //map through hours
    return(
        <div className='calendar-day-wrapper'>
            <h3>{day}</h3>
            {schedule.map((s, idx )=> <CalendarItem key={idx} {...s}/>)}
        </div>
    )
}

