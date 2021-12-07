import { useContext, useEffect } from 'react';
import { fetchRepoReadme } from '../services/github';
import { ResultItemProps } from '../models';
import '../styles/resultitem.css';
import { DataContext } from '../context';

/**
 * 
 * The ResultItem component.
 * 
 * @param props  
 * @returns 
 */
const ResultItem = ({ repo }: ResultItemProps): JSX.Element => {

    let { data, actions } = useContext(DataContext);

    const pushReadme = () => {
        actions.setReponame(repo.name);
    };


    return (
        <div className="resultitem" onClick={ () => pushReadme() }>
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