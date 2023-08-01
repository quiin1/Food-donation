import { createSlice } from '@reduxjs/toolkit'
import { LOGIN_SUCCESSFULLY, LOGOUT } from '../until/constants' 

const data = [
    {
        state: 'Overview',
    },
    {
        state: 'Post manager',
        title: 'Post Management',
        action: '+ New post',
        actionForm: {
            title: 'Add new post',
            subtitles: ['Post Information', 'Media'],
            inputs: [
                {label: 'Title', type: 'text', width: '100%'}, 
                {label: 'Raising', type: 'money', width: '100%', optionList: ["USD", "EUR", "GBP", "VND"]}, 
                {label: 'Location', type: 'select', width: '50%', optionList: ["Sydney", "San Francisco"]}, 
                {label: 'Address', type: 'select', width: '50%', optionList: ["Crawford Room, Mortlock ....", "San Francisco"]}, 
                {label: 'Description', type: 'description', width: '100%'}
            ], 
            button: 'Create new post',
            success: {
                title: 'Create successfully',
                content: 'Your post created successfully',
                button: 'Back to post management'
            }
        }
    },
    {
        state: 'Location',
        title: 'Location Management',
        action: '+ New new location',
        actionForm: {
            title: 'Add new location',
            subtitles: ['Location Information', 'Media'],
            inputs: [
                {label: 'Location', type: 'select', width: '100%', optionList: ["Sydney", "San Francisco"]}, 
                {label: 'Address', type: 'text', width: '100%'}, 
                {label: 'Description', type: 'description', width: '100%'}
            ], 
            button: 'Create new location',
            success: {
                title: 'Create successfully',
                content: 'Your post created successfully',
                button: 'Back to location management'
            }
        }
    },
    {
        state: 'Reward',
        title: 'Reward Management',
        action: '+ New voucher',
        actionForm: {
            title: 'Add new voucher',
            subtitles: ['Voucher Information', 'Media'],
            inputs: [
                {label: 'Voucher name', type: 'text', width: '100%'}, 
                {label: 'Expired Date', type: 'date', width: '50%'}, 
                {label: 'Voucher Code', type: 'number', width: '50%'}, 
                {label: 'Description', type: 'description', width: '100%'}
            ],
            button: 'Create new voucher',
            success: {
                title: 'Create successfully',
                content: 'Your post created successfully',
                button: 'Back to reward management'
            }
        }
    },
    {
        state: 'Payment record',
        title: 'Payment Record',
        action: '+ New payment record',
        actionForm: {
            title: 'Add new payment record',    
            subtitles: ['Payment record information', 'Media'],
            inputs: [
                {label: 'Title', type: 'text', width: '100%'}, 
                {label: 'Money Used', type: 'money', width: '100%', optionList: ["USD", "EUR", "GBP", "VND"]}, 
                {label: 'Location', type: 'select', width: '50%', optionList: ["Sydney", "San Francisco"]}, 
                {label: 'Address', type: 'select', width: '50%', optionList: ["Crawford Room, Mortlock ....", "San Francisco"]}, 
                {label: 'Description', type: 'description', width: '100%'}
            ], 
            button: 'Create new post',
            success: {
                title: 'Create successfully',
                content: 'Your payment created successfully',
                button: 'Back to payment record'
            }
        }
    },
]

const authenticatedFromLocalStorage = localStorage.getItem('authenticated')
// const mockDataFromLocalStorage = localStorage.getItem('mockData')
// const mockData = mockDataFromLocalStorage ? JSON.parse(mockDataFromLocalStorage) : [
//     [],
//     data[1].rows.map(item => {item.id -=1; return item}),
//     data[2].rows.map(item => {item.id -=1; return item}),
//     data[3].rows.map(item => {item.id -=1; return item}),
//     data[4].rows.map(item => {item.id -=1; return item})
// ]

export default createSlice({
    name: 'dashboard',
    initialState: {
        authenticated: authenticatedFromLocalStorage ? JSON.parse(authenticatedFromLocalStorage) : false,
        subpage: localStorage.getItem('state'),
        data: 
        // mockDataFromLocalStorage ? 
            // data.map((item, index) => {
            //     // item.rows = mockData[index]
            //     return data[index]
            // })
            // : 
            data,
        searchPlaceholder: localStorage.getItem('state') === "Overview" ? "Search a campaign" : "Search a post"
    },
    reducers: {
        changeAuthenticated: (state, action) => {
            switch (action.payload) {
                case LOGIN_SUCCESSFULLY:
                    state.authenticated = true
                    localStorage.setItem("authenticated", state.authenticated)
                    break
                case LOGOUT:
                    state.authenticated = false
                    localStorage.setItem("authenticated", state.authenticated);
                    break
                default:
                    break
            }
        },
        changeSubpage: (state, action) => {
            switch (action.payload) {
                case LOGIN_SUCCESSFULLY:
                    localStorage.setItem('state', state.subpage || "Overview")
                    state.subpage = localStorage.getItem('state')
                    state.searchPlaceholder = "Search a campaign"
                    break
                case LOGOUT:
                    localStorage.setItem('state', "Overview")
                    state.subpage = "Overview"
                    break
                default:
                    state.subpage = action.payload
                    state.searchPlaceholder = action.payload === "Overview" ? "Search a campaign" : "Search a post"
                    localStorage.setItem('state', state.subpage || "Overview")
            }
        },
        
        addData: (state) => {
            // const subpageIndex = state.data.findIndex((item) => item.state === state.subpage)
            // let deepClone = JSON.parse(JSON.stringify(mockData[subpageIndex][0])) as any
            // deepClone.id = Math.round(Math.random() * 9000000000)
            // state.data[subpageIndex].rows.push(deepClone)

            // const newData = [
            //     [],
            //     state.data[1].rows.map(item => item),
            //     state.data[2].rows.map(item => item),
            //     state.data[3].rows.map(item => item),
            //     state.data[4].rows.map(item => item)
            // ]
            // localStorage.setItem("mockData", JSON.stringify(newData))
        },

        addDataProductImage: (state, action) => {
            
        },

        deleteData: (state, action) => {
            // const subpageIndex = state.data.findIndex((item) => item.state === state.subpage)
            // const deleteIndex = state.data[subpageIndex].rows.findIndex(item => item.id === action.payload)
            // state.data[subpageIndex].rows.splice(deleteIndex, 1)
            // const newData = [
            //     [],
            //     state.data[1].rows.map(item => item),
            //     state.data[2].rows.map(item => item),
            //     state.data[3].rows.map(item => item),
            //     state.data[4].rows.map(item => item)
            // ]
            // localStorage.setItem("mockData", JSON.stringify(newData))
        }
    }
})