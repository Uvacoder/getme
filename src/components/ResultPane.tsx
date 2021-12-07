import ResultItem from "./ResultItem";
import '../styles/resultpane.css';
import { ResultPaneProps } from "../models";

const ResultPane = ({ repos }: ResultPaneProps) => {

    console.log(repos);

    return (
        <div className="resultpane">
            { repos.map((repo, idx)=> <ResultItem key={ idx } repo={ repo }/>)}
        </div>
    );
};

export default ResultPane;