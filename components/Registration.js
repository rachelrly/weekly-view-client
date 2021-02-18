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
        const repeatePassword = e.target.repeatePassword.value
        const user = {email, firstName, lastName, password, repeatePassword}
        postNewUser(user)
    }

    return(
        <form onSubmit={e=>handleRegister(e)}>
            <fieldset>
                <label htmlFor='email'>Email</label>
                <input name='email' type='text'/>
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
                <label htmlFor='repeatePassword'>Repeate password</label>
                <input name='repeatePassword' type='password'/>
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