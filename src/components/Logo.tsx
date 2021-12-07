import Project from '../globals/Project';
import '../styles/logo.css';

/**
 * 
 * The Logo component.
 * 
 * @returns 
 * 
 */
const Logo = (): JSX.Element => {

    return <div className="logo">{ Project.APP_NAME }.</div>;
    
};

export default Logo;