import React from 'react'

function AddItemButton(val, items, setItems) {
  return (
    <button className="increment" onClick={() => setItems(()=>{
      console.log("Increment clicked...");
      console.log("ID: "+val[0].id);
      console.log("Product: "+val[0].Product);
      var index = items.findIndex(item => item[0].id === val[0].id)
      console.log("index: "+index);
      if (index === -1){
          console.log("added");
          return [...items, [val[0], 1]];
      }
      else {
          console.log("Pre inc: "+items[index][1]);
          items[index][1]+=1; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
          console.log("incremented to: "+items[index][1]);
          return [...items];
      }                       
  }
  )}> +1 </button>
  );
}

export default AddItemButton;