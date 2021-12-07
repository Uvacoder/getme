import ResultItem from "./ResultItem";
import '../styles/resultpane.css';

interface Owner {
    login: string
    avatar_url: string,
};

interface Repo {
    name: string,
    description: string,
    owner: Owner
};


interface ResultPaneProps {
   repos: Repo[],
};


const ResultPane = ({ repos }: ResultPaneProps) => {

    console.log(repos);

    return (
        <div className="resultpane">
            { repos.map((repo, idx)=> <ResultItem key={ idx } repo={ repo }/>)}
        </div>
    );
};

export default ResultPane;