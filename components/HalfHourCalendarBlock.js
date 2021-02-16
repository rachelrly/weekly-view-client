import React from 'react'
import BlankCalendarItem from './BlankCalendarItem'

export default function HalfHourCalendarBlock(props){

    return (
        <div className='half-hour-block-wrapper'>
            {props.contains}
        </div>
    )
}

HalfHourCalendarBlock.defaultProps = {
    contains: BlankCalendarItem
}