import { configureStore } from "@reduxjs/toolkit"
import loginSlice from "./loginSlice"
// import dashboardSlice from "./dashboardSlice"

const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        // dashboard: dashboardSlice.reducer 
    }
})

export default store