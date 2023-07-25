import view from '../assets/dashboard/sidebar/view.svg'
import document from '../assets/dashboard/sidebar/fi-sr-document-signed.svg'
import location from '../assets/dashboard/sidebar/fi-sr-location-alt.svg'
import reward from '../assets/dashboard/sidebar/fi-sr-hand-holding-heart.svg'
import money from '../assets/dashboard/sidebar/fi-sr-money.svg'

export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'
export const LOGIN_SUCCESSFULLY = true
export const LOGOUT = 'LOGOUT';

export const baseUrl = 'http://localhost:5000'
export const api = {
  LOGIN: baseUrl + '/auth/login',
  SIGNUP: baseUrl + '/auth/register',
  GET_ALL_POSTS: baseUrl + '/posts',
  CREATE_POST: baseUrl + '/posts',
  UPDATE_POST: baseUrl + '/posts',
  DELETE_POST: baseUrl + '/posts',
}

// dashboard nav left bar
export const listNavItems = [
    {
      title: "Overview",
      img: view,
      path: "/dashboard"
    },
    {
      title: "Post manager",
      img: document,
      path: "/dashboard/post-manager"
    },
    {
      title: "Location",
      img: location,
      path: "/dashboard/location"
    },
    {
      title: "Reward",
      img: reward,
      path: "/dashboard/reward"
    },
    {
      title: "Payment record",
      img: money,
      path: "/dashboard/payment-record"
    }
  ]
