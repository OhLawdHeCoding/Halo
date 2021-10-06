
import React, { useState } from 'react';


function YourItemsBox(props) {
    const [items, setItems] = React.useState([]);
    const val = props.val;
    const key = props.key;
    //const items = props.items;
    //const setItems = props.setItems();




    function handleDec(val, key, items) {
        console.log("Decrement clicked...");
        console.log("ID: " + val[0].id);
        console.log("Product: " + val[0].Product);
        var index = items.findIndex(item => item[0].id === val[0].id)
        if (index !== -1) {
            var amount = items[index][1];
            console.log("index: " + index);
            if (amount === 1) {
                console.log("remove");
                return [...items.splice(index, 1)];
            }
            else {
                console.log("Pre dec: " + amount);
                items[index][1] -= 1; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
                console.log("decremented to: " + items[index][1]);
                return [...items];
            }
        } else return [...items];
    }

    return (
        <div className="handleDec">
            <button className="decrement" onClick={() => handleDec(val, key, items)}> -1</button>
        </div>
    );

}




export default YourItemsBox;
