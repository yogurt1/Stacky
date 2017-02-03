import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import thunk from "redux-thunk"
import reducersRegistry from "./reducers"

const configureStore = initialState => {
    const reducer = combineReducers(reducersRegistry)
    const middlewares = [
        thunk
    ]

    const store = createStore(reducer, initialState,
        composeWithDevTools(
            applyMiddleware(...middlewares)))

    if (module.hot) {
        module.hot.accept("./reducers", () =>
            System.import("./reducers")
                .then(m => m.default)
                .then(nextReducersRegistry => {
                    const nextReducer = combineReducers(
                        nextReducersRegistry)
                    store.replaceReducer(nextReducer)
                }))
    }

    return store
}

export default configureStore
