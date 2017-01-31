import { reducer as formReducer } from "redux-form"
import { reducer as counterReducer } from "./ducks/counter"

const reducersRegistry = {
    counter: counterReducer,
    form: formReducer
}

export default reducersRegistry
