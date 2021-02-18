import React from 'react'
import Link from 'next/link'

export default function Login(){

    return (
        <section>
            <form onSubmit={()=>{}}>
                <fieldset>
                    <label>Email</label>
                    <input type='text' />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <input type='password' />
                </fieldset>
                <div className='form-button-wrapper'>
                    <button type='submit'>Login</button>
                    <Link href='/register'>
                        <a>Create an account</a>
                    </Link>
                </div>
            </form>
        </section>
    )
}