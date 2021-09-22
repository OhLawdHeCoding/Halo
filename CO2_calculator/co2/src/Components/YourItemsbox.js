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

function AddToItemBox() {
    const [itemBox, setItemBox] = useState([]);
    return (
        <div className="youritemsbox">
<<<<<<< HEAD
            <h3>Chosen items</h3>
            <h3>Co2 equivalent</h3>
            <h3>Number of items: {itemBox.length}</h3>
            <button onClick={(item) => setItemBox(itemBox.push(item))}></button>
=======
>>>>>>> 79d4b8ec9e0e7834f27f7c0f9713d4f80e058a06
        </div>
    );


}

export default AddToItemBox;
