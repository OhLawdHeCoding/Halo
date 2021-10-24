import React from 'react';

function ClearButton (items, setItems){
    if (items.length>0)
    return <button className="addButton" onClick={() => setItems([])}> clear </button>
}

export default ClearButton;