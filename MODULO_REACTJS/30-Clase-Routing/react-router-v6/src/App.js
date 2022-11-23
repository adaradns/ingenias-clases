import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar 
        items = {["home", "about"]}
      />
      <Routes>
        <Route path='/home' element={<Home />} />          
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
