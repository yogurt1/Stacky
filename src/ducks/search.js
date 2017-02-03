import { createAction } from "redux-actions"
import createSelector from "reselect"

export const types = {
    SET_RESULTS: "SET_RESULTS"
}

export const actions = {
    setResults: createAction(types.SET_RESULTS)
}

export const initialState = {}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_RESULTS: return {
            ...state,
            [action.payload.id]: action.payload
        }
        default: return state
    }
}

export const selectors = {
    selectAll () {
        return createSelector(
            state => state.search,
            search => search
        )
    }
}
