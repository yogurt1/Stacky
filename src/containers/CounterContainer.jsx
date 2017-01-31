import React from "react"
import { Container, Button } from "reactstrap"
import { connect } from "react-redux"
import { actions as counterActions } from "../ducks/counter"

@connect(state => ({ counter: state.counter }), {
    ...counterActions
})
export default class CounterContainer extends React.Component {
    state = {
        interval: null
    }

    handleIncrementButtonClick = ev => {
        this.props.increment()
    }

    handleDecrementButtonClick = ev => {
        this.props.decrement()
    }

    handleResetButtonClick = ev => {
        this.props.reset()
    }

    handleToggleIntervalClick = ev => {
        this.toggleInterval()
    }

    toggleInterval = () => {
        this.setState(({ interval }) => ({
            interval: interval
            ? clearInterval(interval)
            : setInterval(() =>
                this.props.increment(), 900)
        }))
    }

    componentDidMount () {
        this.toggleInterval()
    }

    render () {
        return (
            <Container>
                <h1>Counter: { this.props.counter }</h1>
                <Button onClick={this.handleToggleIntervalClick}>
                    Toggle interval increment
                </Button>
                <Button onClick={this.handleIncrementButtonClick}>
                    Increment
                </Button>
                <Button onClick={this.handleDecrementButtonClick}>
                    Decrement
                </Button>
                <Button onClick={this.handleResetButtonClick}>
                    Reset
                </Button>
            </Container>
        )
    }
}
