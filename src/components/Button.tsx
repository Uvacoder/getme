import Project from '../globals/Project';
import { ButtonProps } from '../models';

/**
 * 
 * The Button component.
 * 
 * @returns 
 * 
 */
const Button = ({ pushReadme }: ButtonProps ): JSX.Element => {

    return <button onClick={ () => pushReadme() }>{ Project.APP_NAME }</button>;
    
};

export default Button;