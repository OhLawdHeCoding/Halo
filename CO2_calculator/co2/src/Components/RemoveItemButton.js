import React from 'react'

function RemoveItemButton(val, items, setItems) {
  return (
    <button className="decrament" onClick={() => setItems(()=>{
        /*
        this decrament button sets the "items" array to a new value. It doesn't mutate "items", it sets it
        to a new value so that react visually updates the content. This is why I return [...Items] in some
        places. This creates a new array out of the destructed elements of the previous. It doesn't change
        anything, it just creates a new identical array.

        The "items" array is composed of [val, count] = [{Products, id, MeanCO2, tags[]}, count].
        When val[0] is referenced, we access the actual product data {Products, id, MeanCO2, tags[]}, 
        when val[1] is referenced, we access the count of the item.
        */
        console.log("Decrement clicked...");
        console.log("ID: "+val[0].id);
        console.log("Product: "+val[0].Product);
        var index = items.findIndex(item => item[0].id === val[0].id)
        if (index !== -1){
            var amount = items[index][1];
            console.log("index: "+index);
            if (amount === 1){
                console.log("remove");
                return [...items.splice(index, 1)];
            }
            else {
                console.log("Pre dec: "+amount);
                items[index][1]-=1; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
                console.log("decremented to: "+items[index][1]);
                return [...items];
            }
        } else return [...items];                       
    }
    )}> -1 </button>
  );
}

export default RemoveItemButton;