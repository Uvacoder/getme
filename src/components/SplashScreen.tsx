import { PacmanLoader } from "react-spinners";
import { Wordmark } from ".";
import Project from "../models/Project";

const SplashScreen = (): JSX.Element => {
    return (
        <div className="splash">
            <PacmanLoader size={10} color="white" />
            <p>Patience is a virtue.</p>
        </div>
    );
};

export default SplashScreen;