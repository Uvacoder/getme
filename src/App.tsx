import './styles/layout.css';
import { Sidebar, Viewer } from './components';

/**
 * 
 * The App component.
 * 
 * @returns 
 */
const App = (): JSX.Element => {

  return (
    <div className="layout">
      <Sidebar />
      <Viewer />
    </div>
  );

};

export default App;
