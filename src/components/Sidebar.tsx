import Button from "./Button";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import '../styles/sidebar.css';
import Divider from "./Divider";
import ResultPane from "./ResultPane";

import { fetchRepos } from "../services/github";
import { useEffect, useState } from "react";


const Sidebar = () => {

    const [repos, setRepos] = useState([]);
   
    useEffect(() => {
        const init = async () =>  {
            setRepos(await fetchRepos("cs50"));            
        };

        init();
    }, []);

    return (
        <div>
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