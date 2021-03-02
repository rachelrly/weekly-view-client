
const {TOKEN_KEY} = process.env;

const TokenService ={

  //saves auth token
  saveAuthToken(token) {
    window.localStorage.setItem(TOKEN_KEY, token);
  },

  //grabs auth token
  getAuthToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  },

  //clears auth token
  clearAuthToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  },

  // checks if use has auth token
  hasAuthToken() {
    return !!this.getAuthToken();
  },
  getHeaders() {
    return {
      'content-type': 'application/json',
      authorization: `Bearer ${this.getAuthToken()}`,
    };
  },

}


export default TokenService;