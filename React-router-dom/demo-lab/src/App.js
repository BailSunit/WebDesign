import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link> {"       "}
        <Link to='/about'>About</Link> {"       "}
        <Link to='/profile'>Profile</Link> {"       "}
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
      <footer>
        <div>This is the footer</div>
      </footer>
    </Router>
  );
}

export default App;
