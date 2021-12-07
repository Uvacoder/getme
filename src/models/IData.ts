import Repo from "./Repo";

interface IData {
    data: {
        username: string|null,
        reponame: string|null,
        readme: string,
        repos: Repo[],
    },
    actions: {
        setUsername: Function,
        setReponame: Function,
        setReadme: Function,
        setRepos: Function
        fetchRepos: Function,
        fetchRepoReadme: Function,
    },
}

export default IData;