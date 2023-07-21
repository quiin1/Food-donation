import { createSelector } from "@reduxjs/toolkit"

export const accountsSelector = (state => state.login.accounts)
export const statusLoginSelector = (state => state.login.status)


export const dataSelector = (state => state.dashboard.data)
export const authenticatedSelector = (state => state.dashboard.authenticated)
export const subpageIndexSelector = (state => {
    const index = state.dashboard.data.findIndex((item) => item.state === state.dashboard.subpage)
    return index > 0 ? index : 0
})
export const subpageSelector = (state => state.dashboard.subpage)
export const searchPlaceholderSelector = (state => state.dashboard.searchPlaceholder)

export const totalRowsSelector = createSelector( // not a state -> not auto update
    dataSelector,
    subpageIndexSelector,
    (data, index) => {
        return data[index].rows.length
    }
)