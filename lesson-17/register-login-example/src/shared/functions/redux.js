export const pending = (state) => {
    state.isLoading = true;
    state.error = null;
};

export const rejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};