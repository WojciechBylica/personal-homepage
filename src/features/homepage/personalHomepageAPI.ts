import axios from 'axios';

const gitHubAPIURL = 'https://api.github.com';
const user = 'WojciechBylica';

export interface IRepository {
  id: string;
  name: string;
  description: string;
  clone_url: string;
}

export const getRepositories = (): Promise<IRepository[]> =>
  axios
    .get(`${gitHubAPIURL}/users/${user}/repos`)
    .then((response) => response.data);
