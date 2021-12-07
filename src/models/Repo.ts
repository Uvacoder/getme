import Owner from "./Owner";

interface Repo {
    name: string,
    description: string,
    owner: Owner
};

export default Repo;