import React from 'react'
import Link from 'next/link'

export default function Registration(){

    return(
        <form>
            <fieldset>
                <label></label>
                <input type='text'/>
            </fieldset>
            <div className='form-button-wrapper'>
                    <button type='submit'>Register</button>
                    <Link href='/login'>
                        <a>Log In</a>
                    </Link>
                </div>
        </form>
    )
}