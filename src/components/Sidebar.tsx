import Button from "./Button";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import '../styles/sidebar.css';
import Divider from "./Divider";
import ResultPane from "./ResultPane";


const Sidebar = () => {
    return (
        <div>
            <div className="header">
                <Logo />
                <div>
                    <SearchBox />
                    <Button />
                </div>
            </div>
            <Divider />
            <ResultPane />
        </div>
    );
};

export default Sidebar;