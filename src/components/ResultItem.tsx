import { useEffect } from 'react';
import { fetchReadme } from '../services/github';
import { ResultItemProps } from '../models';
import '../styles/resultitem.css';

/**
 * 
 * The ResultItem component.
 * 
 * @param props  
 * @returns 
 */
const ResultItem = ({ repo }: ResultItemProps): JSX.Element => {

    useEffect(() => {

        (async () => {
            await fetchReadme(repo.owner.login, repo.name);
        })();

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