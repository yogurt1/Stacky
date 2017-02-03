import GithubApiClient from "./GithubApiClient"

export default class GithubSearchApiClient extends GithubApiClient {
    searchRepos (q) {
        return this.client.get({
            url: "/search/repositories",
            sort: "starts",
            ordering: "desc",
            query: { q }
        })
    }
}
