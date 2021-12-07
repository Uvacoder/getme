import ResultItem from "./ResultItem";
import '../styles/resultpane.css';
import { ResultPaneProps } from "../models";

/**
 * 
 * The ResultPane component.
 * 
 * @param props
 * @returns 
 * 
 */
const ResultPane = ({ repos }: ResultPaneProps): JSX.Element => {

    return (
        <div className="resultpane">
            { repos.map((repo, idx)=> <ResultItem key={ idx } repo={ repo }/>)}
        </div>
    );
    
};

export default ResultPane;