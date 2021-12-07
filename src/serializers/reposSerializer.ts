import { Owner, Repo } from "../models";

/**
 * 
 * Serialize json object to Repo[].
 * 
 * @param json The json object from GitHub API.
 * @returns 
 * 
 */
const reposSerializer = ( json: any[] ): Repo[] => {

    const repos: Repo[] = json.map(j => {

        let owner: Owner = {
            login:      j.owner.login,
            avatar_url: j.owner.avatar_url,
        };

        return {
            name:        j.name,
            description: j.description,
            owner:       owner,
        };
    });

    return repos;
    
};

export default reposSerializer;