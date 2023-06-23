import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        },
    }
})

export const { increment, decrement, incrementByAmount } = postSlice.actions
export default postSlice.reducer