import Project from '../globals/Project';

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