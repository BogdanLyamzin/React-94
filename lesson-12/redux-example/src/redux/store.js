import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
    books: [{
        id: "1",
        title: "Worm",
        author: "John C. McCrae",
        favorite: false,
    }],
};

const reducer = (state = initialState) => {
    return state;
}

const enchancer = devToolsEnhancer();

const store = createStore(reducer, enchancer);
/*
const createStore = (reducer, initialState) {
    if(initialState) {
        return reducer(initialState)
    }
    return reducer()
}
*/

export default store;