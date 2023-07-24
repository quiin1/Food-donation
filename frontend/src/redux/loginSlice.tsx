import { createSlice } from "@reduxjs/toolkit"
import * as login from "../until/constants"

interface Account {
    username: string
    password: string
}

interface LoginState {
    status: string
    accounts: Account[]
}

const accountsFromLocalStorage = localStorage.getItem('accounts');
const initialAccounts: Account[] = accountsFromLocalStorage ? JSON.parse(accountsFromLocalStorage) : [
  {
    username: "annie",
    password: "123"
  }
];
const initialState: LoginState = {
    status: login.LOGIN,
    accounts: initialAccounts
}

export default createSlice({
    name: 'login',
    initialState,
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