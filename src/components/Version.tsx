import Project from "../models/Project";

/**
 * 
 * The Version flag to display.
 * 
 * @returns 
 * 
 */
const Version = (): JSX.Element => {

    return (
        <div className="version">
            <a href={Project.REPO_LINK} target="_blank" rel="noreferrer" className="brand">{Project.APP_NAME.split(" ").join("")}.</a>
            <span className="sep">|</span>
            <div className="desc">{Project.APP_DESCRIPTION}</div>
            <span className="sep">|</span>
            <span className="vversion">{Project.APP_VERSION}</span>
        </div>
    );

};

export default Version;