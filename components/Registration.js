import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import TokenService from '../services/token-service'
import { UserContext } from '../contexts/userContext'
import { postNewUser, postLogin} from '../services/auth-api-service'

export default function Registration(){
    let router = useRouter();
    const Context = React.useContext(UserContext);

    const  handleRegister = async e => {
        e.preventDefault()
        const email = e.target.email.value
        const first_name = e.target.firstName.value
        const last_name = e.target.lastName.value
        const password = e.target.password.value
        const repeatPassword = e.target.repeatPassword.value
        const user = JSON.stringify({user:{email, first_name, last_name, password, repeatPassword}});
        
        // Moved stringify outside of the http call, small performance improvement.
        const userLogInfo = JSON.stringify({
            email : email.toLowerCase(),
            password
        })
        console.log(user);
        // added async / await to chain login after register
        await postNewUser(user);
        // Call log in
        const result = await postLogin(userLogInfo);
        
        // saves auth token (JWT)
        TokenService.saveAuthToken(result.data.token);
        // adds user id to context, theres a getter in users context.
        Context.addUserId(result.data.user.id);
        // Route to home
        router.push('/');
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