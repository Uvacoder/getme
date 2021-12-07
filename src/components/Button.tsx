import Project from '../globals/Project';
import '../styles/button.css'

/**
 * 
 * The Button component.
 * 
 * @returns 
 * 
 */
const Button = (): JSX.Element => {

    return <button className="button">{ Project.APP_NAME }</button>;
    
};

export default Button;