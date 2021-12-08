import { createContext } from "react";
import { IData } from "../models";
import { fetchRepoReadme, fetchRepos } from "../services/github";

const defaultData: IData = {
    data: {
        username: null,
        reponame: null,
        readme: "",
        repos: [],
    },
    actions: {
        setUsername: () => {},
        setReponame: () => {},
        setReadme: () => {},
        setRepos: () => {},
        fetchRepos: fetchRepos,
        fetchRepoReadme: fetchRepoReadme,
    },
};

const DataContext = createContext<IData>(defaultData);

export { DataContext, defaultData };