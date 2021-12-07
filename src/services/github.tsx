import { Repo } from "../models";
import { reposSerializer } from "../serializers";

/**
 * 
 * Fetch all the repos of the user.
 * 
 * @param username The username to be searched.
 * @returns 
 * 
 */
const fetchRepos = async (username: string): Promise<Repo[]> => {

    const response = await fetch(`https://api.github.com/users/${ username }/repos`);
    const json = await response.json();
    return reposSerializer(json);

};

/**
 * 
 * Fetch the readme.md of the user's repo.
 * 
 * @param username 
 * @param reponame 
 * @returns 
 */
const fetchReadme = async (username: string, reponame: string) => {

    const response = await fetch(`https://api.github.com/repos/${ username }/${ reponame }/readme`);
    const json = await response.json();

    return json.content;
};


export { fetchRepos , fetchReadme };