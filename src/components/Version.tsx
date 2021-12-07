import Project from "../models/Project";

const Version = (): JSX.Element => {
    return (
        <div className="version">
            <span className="brand">{ Project.APP_NAME.split(" ").join("") }.</span>
            <span className="sep">|</span>
            <div className="desc">{ Project.APP_DESCRIPTION }</div>
            <span className="sep">|</span>
            <span className="vversion">{ Project.APP_VERSION }</span>
        </div>
    );
};

export default Version;