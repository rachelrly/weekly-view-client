import React from 'react'
import Link from 'next/link'
import {postLogin} from '../services/auth-api-service'

export default function Login(){

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        postLogin({email, password})
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