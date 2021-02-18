import React from 'react'
import Link from 'next/link'
import { postNewUser} from '../services/auth-api-service'

export default function Registration(){
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const password = e.target.password.value
        const repeatPassword = e.target.repeatPassword.value
        const user = {email, firstName, lastName, password, repeatPassword}
        postNewUser(user)
    }

    return(
        <section>
            <form
            onSubmit={e => handleRegister(e)}
            autoComplete='new-password'>
                <fieldset>
                    <label htmlFor='email'>Email</label>
                    <input  name='email' type='text'/>
                </fieldset>
                <fieldset>
                    <label htmlFor='firstName'>First name</label>
                    <input name='firstName' type='text'/>
                </fieldset>
                <fieldset>
                    <label htmlFor='lastName'>Last name</label>
                    <input name='lastName' type='text'/>
                </fieldset>
                <fieldset>
                    <label htmlFor='password'>Password</label>
                    <input name='password'type='password'/>
                </fieldset>
                <fieldset>
                    <label htmlFor='repeatPassword'>Repeat password</label>
                    <input name='repeatPassword' type='password'/>
                </fieldset>
                <div className='form-button-wrapper'>
                        <button type='submit'>Register</button>
                        <Link href='/login'>
                            <a>Log In</a>
                        </Link>
                    </div>
            </form>
        </section>
    )
}