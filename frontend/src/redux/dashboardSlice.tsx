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
    {
        state: 'Users Management',
        title: 'Users Management',
        action: '+ New user',
        actionForm: {
            title: 'Add new user',    
            subtitles: ["User's information", 'Media'],
            inputs: [
                {label: 'Title', type: 'text', width: '100%'}, 
                {label: 'Location', type: 'select', width: '50%', optionList: ["Sydney", "San Francisco"]}, 
                {label: 'Address', type: 'select', width: '50%', optionList: ["Crawford Room, Mortlock ....", "San Francisco"]}, 
                {label: 'Description', type: 'description', width: '100%'}
            ], 
            button: 'Create new user',
            success: {
                title: 'Create successfully',
                content: 'New user created successfully',
                button: 'Back to users management'
            }
        }
    },
]

const authenticatedFromLocalStorage = localStorage.getItem('authenticated')
export default createSlice({
    name: 'dashboard',
    initialState: {
        authenticated: authenticatedFromLocalStorage ? JSON.parse(authenticatedFromLocalStorage) : false,
        subpage: localStorage.getItem('state'),
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
    }
})