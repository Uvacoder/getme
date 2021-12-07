
const fetchRepos = async (username: string) => {

    const response = await fetch(`https://api.github.com/users/${ username }/repos`);
    const json = await response.json();

    return json;
};


const fetchReadme = async (username: string, reponame: string) => {

    const response = await fetch(`https://api.github.com/repos/${ username }/${ reponame }/readme`);
    const json = await response.json();
    
    return json.content;
};


export { fetchRepos , fetchReadme };