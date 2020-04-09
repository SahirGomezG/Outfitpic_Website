import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Error from './pages/Error';
import Contact from './pages/Contact';

import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/about/" component={About}/>
     <Route exact path="/terms-conditions/" component={Terms}/>
     <Route exact path="/privacy-policy/" component={Privacy}/>
     <Route exact path="/contact/" component={Contact}/>
     <Route component={Error}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;


/*<div className="App">
      <header className="App-header">
        <p>
          Hello from Outfitpic
        </p>
      </header>
    </div>*/