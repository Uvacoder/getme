import ResultItem from "./ResultItem";
import '../styles/resultpane.css';

const getResultLists = (): object[] => {

    let lists: object[] = [];

    for (let i = 0; i < 20; ++i) {
        lists.push(<ResultItem />);
    };


    return lists;
};


const ResultPane = () => {
    return (
        <div className="resultpane">
            { getResultLists() }
        </div>
    );
};

export default ResultPane;