import React from 'react'
import PortionSizeButton from './PortionSizeButton'

function AddItemButton(val, items, setItems) {
  const [custom, setCustom] = React.useState([]);
  return (
    <div>
      <div className="customAddButton">
        <input type="text" placeholder="customValue" onChange={(event) => {
          var _portion = {name: event.target.value+"g", grams: event.target.value}
          setCustom(_portion);  
        }}/>{PortionSizeButton(custom, val, items, setItems)}
      </div>
      <div>
          {[...val.PortionSize, custom].filter((p)=>{if(p)return true;return false}).map((portion, key) => {
              return <div className="addButton"><td className="buttonCell" key={key}>{PortionSizeButton(portion, val, items, setItems)}</td></div>
          })}  
      </div>
    </div>
  );
}

export default AddItemButton;