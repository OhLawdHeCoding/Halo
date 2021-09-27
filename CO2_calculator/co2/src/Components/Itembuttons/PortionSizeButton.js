import React from 'react'

function PortionSizeButton(portion, val, items, setItems) {
  return (
    <button className="addButton" onClick={() => setItems(()=>{
        console.log("Add clicked...");
        console.log("ID: "+val.id);
        console.log("Product: "+val.Product);
        var index = items.findIndex(item => item[0].id === val.id)
        console.log("index: "+index);
        if (index === -1){
            console.log("added");
            return [...items, [val, portion.grams/1000*2]];
        }
        else {
            
            var oldAmount = items[index][1];
            console.log("Pre inc: "+oldAmount);
            var newAmount = oldAmount+portion.grams/1000; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
            var newItem = [val, newAmount];
            items[index] = newItem;
            console.log("incremented to: "+newAmount);
            return [...items];
        }
    }
    )}> {portion.name+" ("+portion.grams+"g)"} </button>
  );
}

export default PortionSizeButton;