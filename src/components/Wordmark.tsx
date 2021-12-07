import Logo from "./Logo";

interface WordmarkProps {
    text: string,
}

const Wordmark = ({ text }: WordmarkProps): JSX.Element => {

    return (
        <div className="wordmark">
            <Logo />
            <span>{ text }</span>
        </div>
    );
    
};

export default Wordmark;