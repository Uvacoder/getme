
const fetchRepos = async (username: string) => {

    const response = await fetch(`https://api.github.com/users/${ username }/repos`);
    const json = await response.json();

    return json;
};


const fetchReadme = async (username: string, reponame: string) => {

    const response = await fetch(`https://api.github.com/repos/${ username }/${ reponame }/readme`);
    const json = await response.json();

    const response2 = await fetch(json.downloard_url);
    const text = await response2.text();

    console.log(json.download_url, text);
};


export { fetchRepos , fetchReadme };