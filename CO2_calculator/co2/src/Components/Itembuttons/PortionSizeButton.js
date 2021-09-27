import React from 'react'

function PortionSizeButton(_portion, _val, items, setItems) {
  return (
    <button className="addButton" onClick={() => setItems(()=>{
        console.log("Add clicked...");
        console.log("ID: "+_val.id);
        console.log("Product: "+_val.Product);
        var itemsIndex = items.findIndex(item => item.val.id === _val.id)
        console.log("index: "+itemsIndex);
        if (itemsIndex === -1){//check if the item exists in the itembox, if not we should add it and the new portion
            console.log("added");
            return [...items, {val:_val, portions:[{portion:_portion, amount:_portion.grams}]}];
        }
        else {
            var portionIndex = items[itemsIndex].portions.findIndex(portionItem => portionItem.portion.name == _portion.name);
            if (portionIndex === -1){
                console.log(items[itemsIndex].portions);
                items[itemsIndex].portions.push({portion:_portion, amount:_portion.grams/2});
                return [...items];
            }
            else{
            var oldAmount = items[itemsIndex].portions[portionIndex].amount; //items[{val, [{PortionSize, ->COUNT<-}]}]
            console.log("Pre inc: "+oldAmount);
            var newAmount = oldAmount+_portion.grams/2; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
            var newItem = {portion:_portion, amount:newAmount};
            items[itemsIndex].portions[portionIndex] = newItem;
            console.log("incremented to: "+newAmount);
            return [...items];
            }
        }
    }
    )}> {_portion.name+" ("+_portion.grams+"g)"} </button>
  );
}

export default PortionSizeButton;