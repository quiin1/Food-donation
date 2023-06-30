import { createSlice } from "@reduxjs/toolkit"
import * as login from "../constants/login"

export default createSlice({
    name: 'login',
    initialState: {
        status: login.LOGIN
    },
    reducers: {
        changeStatus: (state, action) => {
            // mutation by INTER
            state.status = action.payload
        } // type: "login/changeStatus"
    }
})