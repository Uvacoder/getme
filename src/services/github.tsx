
const fetchRepos = async (username: string) => {

    const response = await fetch(`https://api.github.com/users/${ username }/repos`);
    const json = await response.json();

    return json;
};


export { fetchRepos };