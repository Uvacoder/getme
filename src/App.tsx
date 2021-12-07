import './styles/layout.css';
import Sidebar from './components/Sidebar';
import Viewer from './components/Viewer';

export default function App() {
  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="viewer">
        <Viewer />
      </div>
    </div>
  );
};
