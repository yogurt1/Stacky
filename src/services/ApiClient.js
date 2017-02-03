import axios from "axios"

export default class ApiClient {
    constructor (apiUrl, headers) {
        this.client = axios.create({
            baseURL: apiUrl,
            headers: {
                ...headers
            }
        })
    }
}
