import React from "react"
import styled from "styled-components"
import { Route } from "react-router-dom"
import HomeScene from "./HomeScene"

const About = () => (
    <h1>About</h1>
)

const AppWrapper = styled.div`
    font-family: Roboto, HelveticaNeue, Arial, sans-serif;
`

export default class App extends React.Component {
    render () {
        return (
            <AppWrapper>
                <h1>Welcome!</h1>

                <Route exact path="/" component={HomeScene} />
                <Route path="/about" component={About} />
            </AppWrapper>
        )
    }
}
