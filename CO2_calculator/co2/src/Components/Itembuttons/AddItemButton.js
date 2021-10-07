import React from 'react'
import PortionSizeButton from './PortionSizeButton'

/* 
AddItemButton har två huvudsakliga uppgifter:
1. Skapa en knapp för varje portion
2. Skapa ett textfält för custom portioner, och skicka den till ovan punkt^
*/

function AddItemButton(val, items, setItems) {
  //const custom = { name: "", grams: "0" };
  const [custom, setCustom] = React.useState({ name: "", grams: "0" });
  //För att hålla koll på vad som står i textfältet använder jag ett state^
  //Defualt är en portion som inte har något namn och väger 0 gram
  return (
    <div>
      <div className="customAddButton">
        <div className="customPortion">
          <input type="text" placeholder="customValue" onChange={(event) => {
            //skapar direkt en portion utav texten i textfältet och sparar med setCustom
            var _portion = { name: event.target.value, grams: parseInt(event.target.value) }
            setCustom(_portion);
          }} />
        </div>
      </div>
      <div>
        {[...val.val.PortionSize, custom].filter((p) => { if (p.name != "") return true; return false }).map((portion, key) => {
          //jag filtrerar bort alla portioner som har ett defualt-namn.
          //Itererar sen över allt som är kvar och returnerar tabellcell "td" med en knapp för varje (kallar PortionSizeButton)
          return <div className="addButton"><td className="buttonCell" key={key}>{PortionSizeButton(portion, val.val, val.items, val.setItems)}</td></div>
        })}
      </div>
    </div>
  );
}

export default AddItemButton;