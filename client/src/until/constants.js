export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'
export const LOGIN_SUCCESSFULLY = true
export const LOGOUT = 'LOGOUT';

// dashboard nav left bar
export const listNavItems = [
    {
      title: "Overview",
      img: "/dashboard.svg",
    },
    {
      title: "Post manager",
      img: "/fi-sr-document-signed.svg",
    },
    {
      title: "Location",
      img: "/fi-sr-location-alt.svg",
    },
    {
      title: "Reward",
      img: "/fi-sr-hand-holding-heart.svg",
    },
    {
      title: "Payment record",
      img: "/fi-sr-money.svg",
    }
  ]

const baseUrl = 'http://localhost:5000'
export const api = {
  LOGIN: baseUrl + '/auth/login',
  SIGNUP: baseUrl + '/auth/register',
  GET_ACCOUNTS: baseUrl + '/api/v1/accounts',
}

