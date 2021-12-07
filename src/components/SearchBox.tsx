import { SearchBoxConfig } from '../models';
import '../styles/searchbox.css';

let searchBoxConfig: SearchBoxConfig = {
    className:   "searchbox",
    type:        "text",
    required:    true,
    placeholder: "Search for username",
};

/**
 * 
 * The SearhBox component.
 * 
 * @returns 
 * 
 */
const SearchBox = (): JSX.Element => {

    return <input { ...searchBoxConfig } />;
    
};

export default SearchBox;