import Project from '../models/Project';

/**
 * 
 * The Logo component.
 * 
 * @returns 
 * 
 */
const Logo = (): JSX.Element => {

    return <div className="logo">{ Project.APP_NAME.split(" ").join("") }.</div>;
    
};

export default Logo;