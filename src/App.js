import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App;
