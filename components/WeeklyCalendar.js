import React from 'react'
import CalendarDay from './CalendarDay'
import TimeInterval from './TimeIntervals'
import data from './fake-data.json'

export default function WeeklyCalendar(){
    //loop through calendar, pass into calendar day
    //create grid with x cols and 8 rows
    //for next seven days, 
    const days = data
    console.log(days)
    return(
        <div className='calendar-wrapper'>
            <TimeInterval />
            {days.map((d, idx) => <CalendarDay  key={idx} {...d}/>)}
        </div>
    )
}