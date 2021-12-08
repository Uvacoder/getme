import { Sidebar, Version, Viewer } from './components';
import { createContext, useEffect, useState } from 'react';
import { IData, Repo } from './models';
import { fetchRepoReadme, fetchRepos } from './services/github';
import { DataContext, defaultData } from './context';
import SplashScreen from './components/SplashScreen';


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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

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

  if (loading) return <SplashScreen />;

  return (
    <DataContext.Provider value={ _defaultData }>
      <Version />
      <div className="app">
        <Sidebar />
        <Viewer />
      </div>
    </DataContext.Provider>
  );

};

export default App;