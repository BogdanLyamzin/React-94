import { legacy_createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

import rootReducer from "./rootReducer";

const enchancer = devToolsEnhancer();

const store = legacy_createStore(rootReducer, enchancer);
/*
const createStore = (reducer, initialState) {
    if(initialState) {
        return reducer(initialState)
    }
    return reducer()
}
*/

export default store;