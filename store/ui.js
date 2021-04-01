export const UI_MUTATIONS={
    SIDEBAR_TOGGLE:"SIDEBAR_TOGGLE",
};
export const state = () => ({
    sidebar_open: false,
})
export const mutations = {
    [UI_MUTATIONS.SIDEBAR_TOGGLE] (state) {
        state.sidebar_open = !state.sidebar_open;
    },
}
export const actions = {
    [UI_MUTATIONS.SIDEBAR_TOGGLE] ({commit}) {
        commit(UI_MUTATIONS.SIDEBAR_TOGGLE);
    },
}
export const getters = {
    isUiSidebarOpen: (state) => {
        return state.sidebar_open;
    },
}

