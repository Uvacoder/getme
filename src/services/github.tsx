import { Repo } from "../models";
import { reposSerializer } from "../serializers";
import { Octokit } from "octokit";
import { fetchReadme } from '@varandas/fetch-readme';

const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN });

/**
 * 
 * Fetch all the repos of the user.
 * 
 * @param username The username to be searched.
 * @returns 
 * 
 */
const fetchRepos = async (username: string): Promise<Repo[]> => {

    let response: any;

    try {
        if (username !== "") {
            response = await octokit.rest.repos.listForUser({ username });
        }
        else {
            response = await octokit.rest.repos.listPublic();
        }
        return reposSerializer(response.data).slice(0, 10);
    } catch (e) {
        response = [];
    }

    return response;

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

    let readme: string;

    try {
        readme = await fetchReadme({ username: username, repository: reponame });
    } catch (e) {
        readme = "";
    }

    return readme;

};

export { fetchRepos, fetchRepoReadme };