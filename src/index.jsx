import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import "react-hot-loader/patch"
import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./containers/App"
import configureStore from "./store"

const store = configureStore()
const target = document.getElementById("app")

if (process.env.NODE_ENV !== "production") {
    window.store = store
}

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </AppContainer>, target)

if (module.hot) {
    module.hot.accept()
}
