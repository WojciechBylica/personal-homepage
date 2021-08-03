import axios from "axios";

const gitHubAPIURL = "https://api.github.com";
const user = "WojciechBylica";

export const getRepositories = () =>
    axios.get(`${gitHubAPIURL}/users/${user}/repos`)
        .then(response => response.data);