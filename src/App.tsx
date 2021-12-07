import './styles/layout.css';
import { Sidebar, Viewer } from './components';
import { createContext, useState } from 'react';
import { IData, Repo } from './models';
import { fetchRepoReadme, fetchRepos } from './services/github';
import { DataContext, defaultData } from './context';


/**
 * 
 * The App component.
 * 
 * @returns 
 */
const App = (): JSX.Element => {

  const [username, setUsername] = useState<string>("");
  const [reponame, setReponame] = useState<string>("");
  const [readme, setReadme] = useState<string>("");
  const [repos, setRepos] = useState<Repo[]>([]);

  let data = {
    username,
    reponame,
    readme,
    repos
  };

  let actions = {
    ...defaultData.actions,
    setUsername,
    setReponame,
    setReadme,
    setRepos,
  };

  let _defaultData = { 
    ...defaultData,
    data,
    actions,
  };

  return (
    <DataContext.Provider value={ _defaultData }>
      <div className="layout">
        <Sidebar />
        <Viewer />
      </div>
    </DataContext.Provider>
  );

};

export default App;
export { DataContext };
