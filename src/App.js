import './App.css';
import Navbar from "./components/Navbar"
import GamePage from './components/pages/GamePage';
import HomePage from './components/pages/HomePage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route
        path='/SingleGame'
        element={<GamePage/>}
        />
            <Route
        path='/'
        element={<HomePage/>}
        />
      </Routes>

      </Router>
    </div>
  );
}

export default App;
