import { useContext, useEffect, useState } from 'react';
import { fetchRepoReadme } from '../services/github';
import ReactMarkdown from 'react-markdown';
import '../styles/viewer.css';
import '../styles/markdown.default.css';
import { DataContext } from '../context';

const Viewer = (): JSX.Element => {

    const { data, actions } = useContext(DataContext);

    useEffect(() => {
        (async () => {
            actions.setReadme(await actions.fetchRepoReadme(data.username, data.reponame));
        })();
    }, [data.reponame]);

    return (
        <div className="viewer">
            <ReactMarkdown children={ data.readme } skipHtml={ true }/>
        </div>
    );

};

export default Viewer;