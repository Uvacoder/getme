import { useContext, useEffect, useState } from 'react';
import { fetchRepoReadme } from '../services/github';
import ReactMarkdown from 'react-markdown';
import { DataContext } from '../context';
import { Wordmark } from '.';

const Viewer = (): JSX.Element => {

    const { data, actions } = useContext(DataContext);
    const [init, setInit] = useState<number>(0);

    useEffect(() => {
        (async () => {
            actions.setReadme(await actions.fetchRepoReadme(data.username, data.reponame));
            setInit(init+1);
        })();
    }, [data.reponame]);

    return (
        <div className="viewer">
            {
                data.readme !== "" ?
                <ReactMarkdown children={ data.readme } skipHtml={ true }/> :
                init == 1 ?
                <Wordmark text="Easy access GitHub ." /> :
                <Wordmark text={`No README.md available for repo ${ data.reponame }.`} /> 
            }
        </div>
    );

};

export default Viewer;