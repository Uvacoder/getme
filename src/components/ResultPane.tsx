import ResultItem from "./ResultItem";
import { Repo, ResultPaneProps } from "../models";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context";
import { Wordmark } from ".";

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

        if (data.username !== null) setLoading(false);

    }, [data.username]);

    return (
        <div className="pane">
            { 
                loading ?
                <Wordmark text="Please wait..." /> :
                !loading && data.repos.length == 0 ?
                <Wordmark text={`No repos found for ${ data.username }.`} /> :
                data.repos.map((repo, idx) => <ResultItem key={ idx } repo={ repo } />)
            }
        </div>
    );
    
};

export default ResultPane;