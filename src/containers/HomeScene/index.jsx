import React from "react"
import { Container, Button } from "reactstrap"
import CounterContainer from "../CounterContainer"

export default class HomeScene extends React.Component {
    render () {
        return (
            <Container>
                <CounterContainer />
            </Container>
        )
    }
}
