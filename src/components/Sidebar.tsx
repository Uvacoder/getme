import Button from "./Button";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import '../styles/sidebar.css';
import Divider from "./Divider";
import ResultPane from "./ResultPane";

import { fetchRepos } from "../services/github";
import { useEffect, useState } from "react";
import { Repo } from "../models";

/**
 * 
 * Sidebar component for searching and displaying results.
 * 
 * @returns 
 */
const Sidebar = (): JSX.Element => {

    const [repos, setRepos] = useState<Repo[]>([]);
   
    useEffect(() => {

        (async() => {
            setRepos(await fetchRepos("cs50"));   
        })();
        
    }, []);

    return (
        <div className="sidebar">
            <div className="header">
                <Logo />
                <div>
                    <SearchBox />
                    <Button />
                </div>
            </div>
            <Divider />
            <ResultPane repos={ repos } />
        </div>
    );

};

export default Sidebar;