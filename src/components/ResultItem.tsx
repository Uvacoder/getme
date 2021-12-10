import { useContext } from 'react';
import { ResultItemProps } from '../models';
import { DataContext } from '../context';

/**
 * 
 * The ResultItem component will be use as a placeholder for search results.
 * 
 * @param props  
 * @returns 
 */
const ResultItem = ({ repo }: ResultItemProps): JSX.Element => {

    let { actions } = useContext(DataContext);

    /**
     * 
     * This function will set the repo to be fetch by the readme viewer.
     * 
     */
    const pushReadme = () => {
        actions.setReponame(repo.name);
        actions.setUsername(repo.owner.login);
        actions.setSearch(false);
    };

    return (
        <div className="item" onClick={() => pushReadme()}>
            <div className="active"></div>
            <div className="item-avatar">
                <img src={repo.owner.avatar_url} alt="" className="avatar" />
            </div>
            <div className="item-content">
                <p className="username">{repo.owner.login}</p>
                <p className="reponame">{repo.name}</p>
                <p className="repodesc">{repo.description}</p>
            </div>
        </div>
    );

};

export default ResultItem;