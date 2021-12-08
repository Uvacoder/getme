import { WordmarkProps } from "../models";
import Logo from "./Logo";

/**
 * 
 * The Wordmark component.
 * 
 * @param text The subtitle of the wordmark.
 * @returns 
 * 
 */
const Wordmark = ({ text }: WordmarkProps): JSX.Element => {

    return (
        <div className="wordmark">
            <Logo />
            <span>{ text }</span>
        </div>
    );
    
};

export default Wordmark;