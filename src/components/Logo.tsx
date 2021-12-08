import { Project } from '../models';

/**
 * 
 * The Logo component of the app.
 * 
 * @returns 
 * 
 */
const Logo = (): JSX.Element => {

    return <div className="logo">
        { Project.APP_NAME.split(" ").join("") }.
    </div>;
    
};

export default Logo;