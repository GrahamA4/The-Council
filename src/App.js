import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Iya from './pages/Iya-Eba';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/iya-eba" element={<Iya />} />
      </Routes>
    </Router>
  );
}

export default App;
