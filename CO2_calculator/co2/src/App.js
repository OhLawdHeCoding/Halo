import './App.css';
import JSONDATA from './Data.json';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
        <Navbar/>
      <div className="homepagecontent">
        <Homepage/>
      </div>
      <table>
        <tr>
          <th>Product</th>
          <th>CO2</th>
        </tr>
        {JSONDATA.map((val, key)=>{
          return <tr><td>{val.Product}</td><td>{val.MeanC02}</td></tr>
        })}
      </table>
    </div>
  );
}

export default App;
