import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
background-color: #fafafa;
padding: 0px 5px;
border-radius: 3px;
box-shadow: 0px 2px 2px green;
cursor: pointer;
border: none !important;
transition: ease background-color 250ms;
&:hover {
    background-color: #FFC107;
}
`;

function PortionSizeButton(_portion, _val, items, setItems) {
    return (
        <Button className="addButton" onClick={() => setItems(() => {
            console.log("Add clicked...");
            console.log("ID: " + _val.id);
            console.log("Product: " + _val.Product);
            var itemsIndex = items.findIndex(item => item.val.id === _val.id)
            console.log("index: " + itemsIndex);
            if (itemsIndex === -1) {//check if the item exists in the itembox, if not we should add it and the new portion
                console.log("added");
                return [...items, { val: _val, portions: [{ portion: _portion, amount: _portion.grams }] }];
            }
            else {
                var portionIndex = items[itemsIndex].portions.findIndex(portionItem => portionItem.portion.name == _portion.name);
                if (portionIndex === -1) {
                    console.log(items[itemsIndex].portions);
                    items[itemsIndex].portions.push({ portion: _portion, amount: _portion.grams});
                    return [...items];
                }
                else {
                    console.log(items[itemsIndex].portions[portionIndex]);
                    var oldAmount = items[itemsIndex].portions[portionIndex].amount; //items[{val, [{PortionSize, ->COUNT<-}]}]
                    console.log("Pre inc: " + oldAmount);
                    var newAmount = oldAmount + _portion.grams; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
                    var newItem = { portion: _portion, amount: newAmount };
                    items[itemsIndex].portions[portionIndex] = newItem;
                    console.log("incremented to: " + newAmount);
                    return [...items];
                }
            }
        }
        )}> {_portion.name + " (" + _portion.grams + "g)"} </Button>
    );
}

export default PortionSizeButton;