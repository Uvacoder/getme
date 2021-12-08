import { Project } from '../models';
import { ButtonProps } from '../models';

/**
 * 
 * The Button component in-charge of searching for GitHub users.
 * 
 * @returns 
 * 
 */
const Button = ({ pushRepos }: ButtonProps ): JSX.Element => {

    return <button onClick={ () => pushRepos() }>
        { Project.APP_NAME }
    </button>;
    
};

export default Button;