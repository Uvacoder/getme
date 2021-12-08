interface IProject 
{

    APP_NAME: string;
    APP_DESCRIPTION: string;
    APP_VERSION: string;
    SPLASH_TEXT: string,

};

const Project: IProject =
{
    APP_NAME:        "Get me",
    APP_DESCRIPTION: "Easy access GitHub README.",
    APP_VERSION:     "Beta",
    SPLASH_TEXT:     "Patience is a virtue.",
};


export default Project;