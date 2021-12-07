import { useContext, useRef } from 'react';
import { Button } from '.';
import { DataContext } from '../context';
import { SearchBoxConfig } from '../models';

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

    const { actions } = useContext(DataContext);
    const inputRef = useRef<HTMLInputElement>(null);

    const pushReadme = () => {
        if (inputRef.current != null) {
            actions.setUsername(inputRef.current.value);
            inputRef.current.value = "";
        }
    };

    return (
        <div>
            <input ref={ inputRef } { ...searchBoxConfig } />
            <Button pushReadme={ pushReadme } />
        </div>
    );
    
};

export default SearchBox;