export function postLogin({email, password}){
    return fetch(`${process.env.API_ENDPOINT}/sessions`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({email, password})
    })
    .then(res => !res.ok
        ? res.json().then(e=> Promise.reject(e))
        : res.json())
}

export function postNewUser(user){
    const {
        email, 
        password, 
        password_confirmation, 
        first_name, 
        last_name
    } = user
    
    return fetch(`${process.env.API_ENDPOINT}/users`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            email, 
            password,
            password_confirmation,
            first_name,
            last_name
        })
    })
}