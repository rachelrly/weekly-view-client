import React from 'react'
import Link from 'next/link'

export default function Header(){
//if not logged in show burger with
//account and calendars

//else show login button
    return (
        <header>
            <Link href='/'>
                <h1>Weekly View</h1>
            </Link>
            <Link href='/login'>
                <a className='button'>Login</a>
            </Link>
        </header>
    )
}