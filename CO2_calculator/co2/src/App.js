
import './App.css';
import JSONDATA from './Data.json';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import SearchBar from './Components/SearchBar';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      
      <div className="homepagecontent">
        <Homepage />
        <SearchBar placeholder="Search..." />
      </div>
    </div>

  );
}

export default App;