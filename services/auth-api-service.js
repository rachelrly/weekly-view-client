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
