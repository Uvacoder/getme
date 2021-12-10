import { useContext, useRef } from 'react';
import { Button } from '.';
import { DataContext } from '../context';
import { SearchBoxConfig } from '../models';

const searchBoxConfig: SearchBoxConfig = {
    className: "searchbox",
    type: "text",
    required: true,
    placeholder: "Search for username",
};

/**
 * 
 * The SearhBox component to search for GitHub user.
 * 
 * @returns 
 * 
 */
const SearchBox = (): JSX.Element => {

    const { actions } = useContext(DataContext);
    const inputRef = useRef<HTMLInputElement>(null);

    /**
     * 
     * Search for all repos related to the GitHub username.
     * 
     */
    const pushRepos = () => {
        if (inputRef.current != null) {
            actions.setUsername(inputRef.current.value.toLowerCase());
            inputRef.current.value = "";
            actions.setSearch(true);
        }
    };

    return (
        <div>
            <input ref={inputRef} {...searchBoxConfig} />
            <Button pushRepos={pushRepos} />
        </div>
    );

};

export default SearchBox;