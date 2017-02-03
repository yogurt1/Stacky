import React from "react"
import { Form, Input } from "reactstrap"
import { reduxForm as form } from "redux-form"

@form("search")
export default class SearchForm extends React.Component {
    render () {
        const { handleSubmit } = this.props
        return (
            <Form onSubmit={handleSubmit}>

            </Form>
        )
    }
}
