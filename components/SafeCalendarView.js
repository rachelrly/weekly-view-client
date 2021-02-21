import React from 'react'
import SwitchDayButton from './SwitchDayButton'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import CalendarDay from './CalendarDay'

export default function SafeCalendarView({days}){
    //make item 75px on small screen
    //make item 100px on larger screens
    //check width and choose if it should be applied
    //get window size 

    //if screen is small, hide some days
    //create ref to track current items showing
    const changeDays = (direction) => {
        return direction == 'left'
        ? ()=>{} //get func to change day from context
        : ()=>{}
    }
   
    return (
        <div className='calendar-display-wrapper'>
            <SwitchDayButton Icon={MdKeyboardArrowLeft} changeDays={()=>changeDays('left')}/>
                <div className='calendar-days-wrapper'>
                {days.map((d, idx) => <CalendarDay  key={idx} {...d}/>)}
                </div>
            <SwitchDayButton Icon={MdKeyboardArrowRight} changeDays={()=>changeDays('right')}/>
        </div>
    )
}