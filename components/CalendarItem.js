import React from 'react'

export default function CalendarItem({content}){
//this needs to use css in js to control
//how large this is
//and changes when item is selected and pulled down


    return (
        <div className='calendar-item-wrapper'>
            {content}
        </div>
    )
}