import view from '../assets/dashboard/sidebar/view.svg'
import document from '../assets/dashboard/sidebar/fi-sr-document-signed.svg'
import location from '../assets/dashboard/sidebar/fi-sr-location-alt.svg'
import reward from '../assets/dashboard/sidebar/fi-sr-hand-holding-heart.svg'
import money from '../assets/dashboard/sidebar/fi-sr-money.svg'

export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'
export const LOGIN_SUCCESSFULLY = true
export const LOGOUT = 'LOGOUT';

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
      path: "/post-manager"
    },
    {
      title: "Location",
      img: location,
      path: "/location"
    },
    {
      title: "Reward",
      img: reward,
      path: "/reward"
    },
    {
      title: "Payment record",
      img: money,
      path: "/payment-record"
    }
  ]
