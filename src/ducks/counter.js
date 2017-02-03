import { createAction } from "redux-actions"

export const types = {
    INCR: "INCR",
    DECR: "DECR",
    RESET: "RESET"
}

export const actions = {
    increment: createAction(types.INCR),
    decrement: createAction(types.DECR),
    reset: createAction(types.RESET)
}

export const initialState = 0
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCR: return state + 1
        case types.DECR: return state - 1
        case types.RESET: return 0
        default: return state
    }
}
