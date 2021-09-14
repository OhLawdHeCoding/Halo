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
     {JSONDATA.map((val, key)=>{
       return <div>{val.Product} {val.MeanC02}</div>
     })}
    </div>
  );
}

export default App;
