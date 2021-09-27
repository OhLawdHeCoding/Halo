
import './App.css';
import JSONDATA from './Data.json';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import DonateButton from './Components/DonateButton';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './Components/About';
import Donate from './Components/Donate';



function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/about' exact component={About}/>
        <Route path='/donate' exact component={Donate}/>
        <Route path='/home' exact component={Homepage}/>
      </Switch>
      </Router>
      

    
     
    </div>

  );
}

export default App;


