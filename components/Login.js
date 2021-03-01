import React from 'react'
import Link from 'next/link'
import {postLogin} from '../services/auth-api-service'

export default function Login(){

    
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const userLogInfo = JSON.stringify({
            email,
            password
        })
        postLogin(userLogInfo)
    }

    return (
        <section>
            <form onSubmit={e=>handleSubmit(e)}>
                <fieldset>
                    <label htmlFor='email'>Email</label>
                    <input name='email' type='text' />
                </fieldset>
                <fieldset>
                    <label htmlFor='password'>Password</label>
                    <input name='password' type='password' />
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