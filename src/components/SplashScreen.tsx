import { PacmanLoader } from "react-spinners";
import Project from "../models/Project";

const SplashScreen = (): JSX.Element => {
    return (
        <div className="splash">
            <PacmanLoader size={10} color="white" />
            <p>{ Project.SPLASH_TEXT }</p>
        </div>
    );
};

export default SplashScreen;