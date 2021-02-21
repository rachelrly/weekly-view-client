import React, {Fragment} from 'react'

export default function TimeInterval({timeSlots=[0, 1, 2, 3, 4, 5, 6, 7]}){

//this should return a list of all the 
//time intervals for the users waking hours
    const interval = time => <div className='interval-item-wrapper'><span>{time}</span></div>
    
    return(
        <div className='calendar-hours-wrapper'>
            {timeSlots.map(t => interval(t))}
        </div>
    )
}