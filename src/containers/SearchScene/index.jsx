import React from "react"
import { Container } from "reactstrap"
import SearchResults from "../SearchResultsContainer"
import SearchForm from "../SearchForm"

export default class SearchScene extends React.Component {
    render () {
        return (
            <Container>
                <SearchForm onSubmit={this.handleSubmit} />
                <SearchResults />
            </Container>
        )
    }

}
