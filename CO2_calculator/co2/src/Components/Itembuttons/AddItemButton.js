import React from 'react'

function AddItemButton(val, items, setItems) {
  return (
    <button className="addButton" onClick={() => setItems(()=>{
      console.log("Add clicked...");
      console.log("ID: "+val.id);
      console.log("Product: "+val.Product);
      var index = items.findIndex(item => item[0].id === val.id)
      console.log("index: "+index);
      if (index === -1){
          console.log("added");
          return [...items, [val, 1]];
      }
      else {
          console.log("Pre inc: "+items[index][1]);
          items[index][1]+=1; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
          console.log("incremented to: "+items[index][1]);
          return [...items];
      }
  }
  )}> {val.Product} </button>
  );
}

export default AddItemButton;