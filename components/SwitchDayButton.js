import React from 'react'

export default function SwitchDayButton({Icon, changeDays}){
    return (
        <div 
            onClick={changeDays}
            className='calendar-side-button'>
            <Icon className='side-button-icon'/>
        </div>
    )
}