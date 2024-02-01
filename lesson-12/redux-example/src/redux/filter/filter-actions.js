import { SET_FILTER } from "./filter-constants"

export const setFilter = payload => {
    return {
        type: SET_FILTER,
        payload,
    }
}