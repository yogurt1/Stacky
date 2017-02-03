import ApiClient from "../ApiClient"

export const GITHUB_API_URL = "https://api.github.com"

export default class GithubApiClient extends ApiClient {
    constructor () {
        super(GITHUB_API_URL, {
            "Accept": "application/vnd.github.v3+json"
        })
    }
}
