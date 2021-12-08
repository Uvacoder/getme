import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Divider from "./Divider";
import ResultPane from "./ResultPane";

/**
 * 
 * Sidebar component for searching and displaying results.
 * 
 * @returns 
 */
const Sidebar = (): JSX.Element => {

    return (
        <div className="sidebar">
            <div className="header">
                <Logo />
                <SearchBox />
            </div>
            <Divider />
            <ResultPane />
        </div>
    );

};

export default Sidebar;