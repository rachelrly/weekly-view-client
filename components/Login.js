import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import TokenService from '../services/token-service'
import { UserContext } from '../contexts/userContext'
import {postLogin, grabUserData} from '../services/auth-api-service'

export default function Login(){
    let router = useRouter();
    const Context = React.useContext(UserContext);

    const handleSubmit = async e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const userLogInfo = JSON.stringify({
            email: email.toLowerCase(),
            password
        })
        const result = await postLogin(userLogInfo);
        await TokenService.saveAuthToken(result.data.token);
        
        //console.log(result);
    
        await Context.addUserId(result.data.user.id);
        

        // this is temporary for data view
        console.table(grabUserData(result.data.user.id));

        router.push('/');
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