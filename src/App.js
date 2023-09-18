import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import NavBarComponent from './components/navBar/navBar.component';
import HeaderComponent from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <HeaderComponent />
    </div>
  );
}

export default App;
