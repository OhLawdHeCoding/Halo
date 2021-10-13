import React from 'react'

function IncItemButton(_portionItem, _item, items, setItems) {
  return (
    <button className="IncButton" onClick={() => setItems(() => {
      console.log("Inc clicked...");
      console.log("ID: " + _item.val.id);
      console.log("Product: " + _item.val.Product);
      console.log("Portion: " + _portionItem.portion.name);
      var itemsIndex = items.findIndex(item => item.val.id === _item.val.id)
      console.log("itemsIndex: " + itemsIndex);

      var portionIndex = items[itemsIndex].portions.findIndex(portionItem => portionItem.portion.name == _portionItem.portion.name);
      if (portionIndex != -1) { //the function executes twice, bug?
        console.log("portionIndex: " + portionIndex);
        console.log(items[itemsIndex].portions);
        var oldAmount = items[itemsIndex].portions[portionIndex].amount; //items[{val, [{PortionSize, ->COUNT<-}]}]
        console.log("Pre dec: " + oldAmount);
        var newAmount = oldAmount + _portionItem.portion.grams; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
        var newItem = { portion: _portionItem.portion, amount: newAmount };
        items[itemsIndex].portions[portionIndex] = newItem;
        console.log("incremented to: " + newAmount);
        return [...items];

      }

    }
    )}>+</button>
  );
}

export default IncItemButton;