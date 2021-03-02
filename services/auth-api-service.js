import TokenService from '../services/token-service'

export function postLogin(user) {
  return fetch(`${process.env.API_ENDPOINT}/sessions`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: user
  }).then((res) =>
    !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  );
}

export function postNewUser(user) {

  // Formated incoming user to be wrapped in a user object to post correctly.
  

  return fetch(`${process.env.API_ENDPOINT}/users`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: user,
  });
}

export function grabUserData(userId) {
    return fetch(`${process.env.API_ENDPOINT}/users/${userId}`,{
        method: "GET",
        headers: TokenService.getHeaders()
    }).then((res) =>
        res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
}
