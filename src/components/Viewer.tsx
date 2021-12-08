import { useContext, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { DataContext } from '../context';
import { Wordmark } from '.';
import Project from '../models/Project';

/**
 * 
 * The Viewer component to view readme.
 * 
 * @returns 
 * 
 */
const Viewer = (): JSX.Element => {

    const { data, actions } = useContext(DataContext);
    const [init, setInit] = useState<number>(0);

    useEffect(() => {

        (async () => {
            actions.setReadme(await actions.fetchRepoReadme(data.username, data.reponame));
            setInit(init+1);
        })();
        
    }, [actions, init, data.username, data.reponame]);

    return (
        <div className="viewer">
            {
                data.readme !== "" ?
                <ReactMarkdown children={ data.readme } skipHtml={ true }/> :
                init === 1 ?
                <Wordmark text={ Project.APP_DESCRIPTION } /> :
                <Wordmark text={`No README.md available for repo ${ data.reponame }.`} /> 
            }
        </div>
    );

};

export default Viewer;