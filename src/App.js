import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import HeaderComponent from './components/header/header.component';
import ProjectsComponent from './components/projects/projects.component';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ProjectsComponent />
    </div>
  );
}

export default App;
