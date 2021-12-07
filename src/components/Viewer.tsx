import { useEffect, useState } from 'react';
import { fetchRepoReadme } from '../services/github';
import ReactMarkdown from 'react-markdown';
import '../styles/viewer.css';
import '../styles/markdown.default.css';

const Viewer = (): JSX.Element => {

    const [readme, setReadme] = useState<string>("");

    useEffect(() => {
        (async () => {
            setReadme(await fetchRepoReadme("Microsoft", "Typescript"));
        })();
    }, []);

    return (
        <div className="viewer">
            <ReactMarkdown children={readme} skipHtml={ true }/>
        </div>
    );

};

export default Viewer;