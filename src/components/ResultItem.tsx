import { useEffect } from 'react';
import { fetchReadme } from '../services/github';
import '../styles/resultitem.css';


interface Owner {
    login: string
    avatar_url: string,
};

interface Repo {
    name: string,
    description: string,
    owner: Owner,
};

interface ResultItemProp {
    repo: Repo,  
};

const ResultItem = ({ repo }: ResultItemProp) => {

    useEffect(() => {
        const init = async () => {
            console.log(await fetchReadme(repo.owner.login, repo.name));
        };

        init();
    }, []);

    return (
        <div className="resultitem">
            <div className="active"></div>
            <div className="resultavatar">
                <img src={ repo.owner.avatar_url } alt="" className="avatar" />
            </div>
            <div className="resultcontent">
                <p className="username">{ repo.owner.login }</p>
                <p className="reponame">{ repo.name }</p>
                <p className="repodesc">{ repo.description }</p>
            </div>
        </div>
    );
};

export default ResultItem;