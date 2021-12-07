import ResultItem from "./ResultItem";
import '../styles/resultpane.css';
import { Repo, ResultPaneProps } from "../models";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context";

/**
 * 
 * The ResultPane component.
 * 
 * @param props
 * @returns 
 * 
 */
const ResultPane = (): JSX.Element => {

    const { data, actions } = useContext(DataContext);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            actions.setRepos(await actions.fetchRepos(data.username));
        })();

        if (data.username != null) {
            setLoading(false);
        }
    }, [data.username]);

    if (loading) {
        return <h1>loading...</h1>
    }
    return (
        <div className="resultpane">
            { data.repos.map((repo, idx) => <ResultItem key={ idx } repo={ repo } />)}
        </div>
    );
    
};

export default ResultPane;