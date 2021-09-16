
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
        {JSONDATA.filter((val)=>{
        if (searchTerm == ""){
          return val
        } else if (val.Product.toLowerCase().includes(searchTerm.toLowerCase()))
        return val
      }).map((val, key) => {
          return <tr className="Product" key={key}><td>{val.Product}</td><td>{val.MeanC02}</td></tr>
        })}
      </table>
    </div>

  );
}

export default App;