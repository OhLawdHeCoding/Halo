import React from 'react'

function DecItemButton(_portionItem, _item, items, setItems) {
  return (/*
        this decrament button sets the "items" array to a new value. It doesn't mutate "items", it sets it
        to a new value so that react visually updates the content. This is why I return [...Items] in some
        places. This creates a new array out of the destructed elements of the previous. It doesn't change
        anything, it just creates a new identical array.

        The "items" array is composed of [val, count] = [{Products, id, MeanCO2, tags[]}, count].
        When val[0] is referenced, we access the actual product data {Products, id, MeanCO2, tags[]}, 
        when val[1] is referenced, we access the count of the item.
        
    <button className="decrament" onClick={() => setItems(()=>{
        
        console.log("Decrement clicked...");
        console.log("ID: "+val[0].id);
        console.log("Product: "+val[0].Product);
        var index = items.findIndex(item => item[0].id === val[0].id)
        if (index !== -1){
            var amount = items[index][1];
            console.log("index: "+index);
            if (amount === 1){
                console.log("remove");
                return [...items[].splice(index, 1)];
            }
            else {
                console.log("Pre dec: "+amount);
                items[index][1]-=1; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
                console.log("decremented to: "+items[index][1]);
                return [...items];
            }
        } else return [...items];                       
    }
    )}> -1 </button>*/
    <button className="DecButton" onClick={() => setItems(()=>{
      console.log("Dec clicked...");
      console.log("ID: "+_item.val.id);
      console.log("Product: "+_item.val.Product);
      console.log("Portion: "+_portionItem.portion.name);
      var itemsIndex = items.findIndex(item => item.val.id === _item.val.id)
      console.log("itemsIndex: "+itemsIndex);
      
      var portionIndex = items[itemsIndex].portions.findIndex(portionItem => portionItem.portion.name == _portionItem.portion.name);
      if (portionIndex!=-1){ //the function executes twice, bug?
      console.log("portionIndex: "+portionIndex);
      console.log(items[itemsIndex].portions);
      var oldAmount = items[itemsIndex].portions[portionIndex].amount; //items[{val, [{PortionSize, ->COUNT<-}]}]
      console.log("Pre dec: "+oldAmount);          
      var newAmount = oldAmount-_portionItem.portion.grams/2; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
      var newItem = {portion:_portionItem.portion, amount:newAmount};
      items[itemsIndex].portions[portionIndex] = newItem;
      console.log("decremented to: "+newAmount);
      return [...items];  
    }
       
  }
  )}>-</button>
  );
}

export default DecItemButton;