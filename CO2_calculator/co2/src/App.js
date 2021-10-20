
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
import Login from './Components/Login';



function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route path='/Halo' exact component={Homepage}/>
        <Route path='/' exact component={Homepage}/>
        <Route path='/about' exact component={About}/>
        <Route path='/donate' exact component={Donate}/>
        <Route path='/home' exact component={Homepage}/>
        <Route path='/login' exact component={Login}/>
      </Switch>
      </Router>

      
      

    
     
    </div>

  );
}

export default App;


