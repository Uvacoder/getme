import Project from '../globals/Project';
import { ButtonProps } from '../models';
import '../styles/button.css'

/**
 * 
 * The Button component.
 * 
 * @returns 
 * 
 */
const Button = ({ pushReadme }: ButtonProps ): JSX.Element => {

    return <button onClick={ () => pushReadme() } className="button">{ Project.APP_NAME }</button>;
    
};

export default Button;