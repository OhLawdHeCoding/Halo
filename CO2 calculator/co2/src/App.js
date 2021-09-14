import './App.css';
import JSONDATA from './Data.json';

function App() {
  return (
    <div className="App">
     {JSONDATA.map((val, key)=>{
       return <div>{val.Product} {val.MeanC02}</div>
     })}
      
    </div>
  );
}

export default App;
