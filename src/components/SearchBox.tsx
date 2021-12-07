import '../styles/searchbox.css';

const searchBoxConfig: object = {
    className: "searchbox",
    type: "text",
    required: true,
    placeholder: "Search for username",
};

const SearchBox = () => {
    return (
        <input { ...searchBoxConfig } />
    );
};

export default SearchBox;