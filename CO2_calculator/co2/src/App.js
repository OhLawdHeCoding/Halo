
import './App.css';
import JSONDATA from './Data.json';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import SearchBar from './Components/SearchBar';
import DonateButton from './Components/DonateButton';



function App() {

  return (
    <div className="App">
      <Navbar />
      <DonateButton />

      <div className="homepagecontent">
        <Homepage />
        <SearchBar placeholder="Search..." data = {JSONDATA}/>
      </div>
     
    </div>

  );
}

export default App;