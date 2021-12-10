import ResultItem from "./ResultItem";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context";
import { Wordmark } from ".";

/**
 * 
 * The ResultPane component will display search results.
 * 
 * @param props
 * @returns 
 * 
 */
const ResultPane = (): JSX.Element => {

    const { data, actions } = useContext(DataContext);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (data.search) {
            (async () => {
                setLoading(true);
                let newRepos = await actions.fetchRepos(data.username);
                actions.setRepos(newRepos);
                setLoading(false);
            })();
        }
    }, [data.username]);

    return (
        <div className="pane">
            {
                loading ?
                    <Wordmark text="Please wait..." /> :
                    data.repos.length === 0 ?
                        <Wordmark text={`No repos found for ${data.username}.`} /> :
                        data.repos.map((repo, idx) => <ResultItem key={idx} repo={repo} />)
            }
        </div>
    );

};

export default ResultPane;