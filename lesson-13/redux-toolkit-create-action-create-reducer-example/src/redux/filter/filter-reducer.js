import { createReducer } from "@reduxjs/toolkit";

import { setFilter } from "./filter-actions";

const initialState = "";

const filterReducer = createReducer(initialState, builder => {
    builder.addCase(setFilter, (_, {payload})=> payload);
})

export default filterReducer;