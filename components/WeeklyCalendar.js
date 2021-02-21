import React, {Fragment} from 'react'
import TimeInterval from './TimeIntervals'
import data from './fake-data.json'
import SafeCalendarView from './SafeCalendarView'

export default function WeeklyCalendar(){
    //loop through calendar, pass into calendar day
    //create grid with x cols and 8 rows
    //for next seven days, 
    const days = data
    return(
        <div className='calendar-full-wrapper'>
            <TimeInterval />
            <SafeCalendarView days={days}/>
        </div>
    )
}