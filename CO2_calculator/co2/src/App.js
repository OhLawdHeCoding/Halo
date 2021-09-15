
import './App.css';
import JSONDATA from './Data.json';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import SearchBar from './Components/SearchBar';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <Navbar />
      
      <div className="homepagecontent">
        <Homepage />

        <SearchBar placeholder="Search..." />
        
        </div>

      <input type="text" placeholder="search" onChange={(event) => {
        setSearchTerm(event.target.value);

      }
      } />
      <table>
        <tr>
          <th>Product</th>
          <th>CO2</th>
        </tr>
        {JSONDATA.map((val, key) => {
          return <tr><td>{val.Product}</td><td>{val.MeanC02}</td></tr>
        })}
      </table>
      {JSONDATA.map((key, val) => {
        return (
          <div className="Product" key={key}>
            <p>{val.Product}</p>
          </div>
        );
      })}
    </div>

  );
}

export default App;