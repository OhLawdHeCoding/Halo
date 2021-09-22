import { useState } from 'react';

//const YourItemsbox = () => {
//    const [itemBox, setItemBox] = useState([]);
//    return (
//        <div className="youritemsbox">
//            <h3>Chosen items</h3>
//            <h3>Co2 equivalent</h3>
//            <h3>Number of items: {itemBox.length}</h3>
//        </div>
//    );
//}

function AddToItemBox(val) {
    const [itemBox, setItemBox] = useState([]);
    return (
        <div className="youritemsbox">
            {()=> setItemBox([...itemBox, val.Product])}
        </div>
    );


}

export default AddToItemBox;
