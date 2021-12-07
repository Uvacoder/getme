import '../styles/resultitem.css';

const ResultItem = () => {
    return (
        <div className="resultitem">
            <div className="active"></div>
            <div className="resultavatar">
                <div className="avatar"></div>
            </div>
            <div className="resultcontent">
                <p className="username">vrfdivino</p>
                <p className="reponame">vrfdivino.github.io</p>
                <p className="repodesc">My portfolio website</p>
            </div>
        </div>
    );
};

export default ResultItem;