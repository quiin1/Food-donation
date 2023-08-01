import { createSelector } from "@reduxjs/toolkit"

export const accountsSelector = ((state: { login: { accounts: any } }) => state.login.accounts)
export const statusLoginSelector = ((state: { login: { status: any } }) => state.login.status)

export const dataSelector = ((state: { dashboard: { data: any } }) => state.dashboard.data)
export const authenticatedSelector = ((state: { dashboard: { authenticated: any } }) => state.dashboard.authenticated)
export const subpageIndexSelector = ((state: { dashboard: { data: { state: any }[]; subpage: any } }) => {
    const index = state.dashboard.data.findIndex((item: { state: any }) => item.state === state.dashboard.subpage)
    return index > 0 ? index : 1
})
export const subpageSelector = ((state: { dashboard: { subpage: any } }) => state.dashboard.subpage)
export const searchPlaceholderSelector = ((state: { dashboard: { searchPlaceholder: any } }) => state.dashboard.searchPlaceholder)

export const totalRowsSelector = createSelector( // not a state -> not auto update
    dataSelector,
    subpageIndexSelector,
    (data, index) => {
        return data[index].rows.length
    }
)