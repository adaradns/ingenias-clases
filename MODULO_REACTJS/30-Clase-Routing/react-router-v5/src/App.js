import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import NavBar from './components/navbar/NavBar';
import Contact from './components/contact/Contact';

function App() {
  return (      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
  );
}

export default App;
