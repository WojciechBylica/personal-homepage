import axios from "axios";

const gitHubAPIURL = "https://api.github.com";

export const getRepositories = username =>
    axios.get(`${gitHubAPIURL}/users/${username}/repos`)
        .then(response => response.data);