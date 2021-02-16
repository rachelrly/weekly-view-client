import React from react

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
                <button type='submit'>Login</button>
            </form>
        </section>
    )
}