import { reducer as formReducer } from "redux-form"
import { reducer as counterReducer } from "./ducks/counter"
import { reducer as searchReducer } from "./ducks/search"

const reducersRegistry = {
    counter: counterReducer,
    search: searchReducer,
    form: formReducer
}

export default reducersRegistry
