import { Repo } from "../models";
import { reposSerializer } from "../serializers";
import { Octokit } from "octokit";
import { fetchReadme } from '@varandas/fetch-readme';

const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN });

// const loginGithub = async () => {
//     const {
//         data: { login },
//       } = await octokit.rest.users.getAuthenticated();
//       console.log("Hello, %s", login);
// };


/**
 * 
 * Fetch all the repos of the user.
 * 
 * @param username The username to be searched.
 * @returns 
 * 
 */
const fetchRepos = async (username: string): Promise<Repo[]> => {

    const response: any = await octokit.rest.repos.listForUser({ username });
    return reposSerializer(response.data);

};

/**
 * 
 * Fetch the readme.md of the user's repo.
 * 
 * @param username 
 * @param reponame 
 * @returns 
 */
const fetchRepoReadme = async (username: string, reponame: string): Promise<string> => {

    const readme: string = await fetchReadme({ username: username, repository: reponame });
    return readme;
    
};


export { fetchRepos , fetchRepoReadme };