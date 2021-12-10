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
    const [empty, setEmpty] = useState<boolean>(true);
    const [start, setStart] = useState<boolean>(true);

    useEffect(() => {

        (async () => {
            actions.setReadme(await actions.fetchRepoReadme(data.username, data.reponame));

            if (data.readme !== "") {
                setEmpty(false);
                if (start === true) {
                    setStart(false);
                }
            } else {
                setEmpty(true);
            }

        })();

        console.log(data);

    }, [data]);

    return (
        <div className="viewer">
            {
                start ?
                    <Wordmark text={Project.APP_DESCRIPTION} /> :
                    empty ?
                        <Wordmark text={`No README.md available for repo ${data.reponame}.`} /> :
                        <ReactMarkdown children={data.readme} skipHtml={true} />
            }
        </div>
    );

};

export default Viewer;