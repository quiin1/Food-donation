import { createSlice } from "@reduxjs/toolkit"
import * as login from "../constants/login"

export default createSlice({
    name: 'login',
    initialState: {
        status: login.LOGIN, // LOGIN LOGOUT SIGNUP
        accounts: JSON.parse(localStorage.getItem('accounts')) || [
            {
                "username": "annie",
                "password": "123"
            }
        ]
    },
    reducers: {
        changeStatus: (state, action) => {
            // mutation by INTER
            state.status = action.payload
        }, // type: "login/changeStatus"
        signUp: (state, action) => {
            state.accounts.push(action.payload)
            localStorage.setItem('accounts', JSON.stringify(state.accounts))
        }
    }
})