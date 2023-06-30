export const dataSelector = (state => state.dashboard.data)
export const subpageIndexSelector = (state => {
    return state.dashboard.data.findIndex((item) => item.state === state.dashboard.subpage)
    console.log(state.dashboard.data.findIndex((item) => item.state === state.dashboard.subpage))
})