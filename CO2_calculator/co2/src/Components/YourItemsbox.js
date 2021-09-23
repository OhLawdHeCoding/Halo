import React, { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';

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

/*function AddItemToBox(item) {
    const [items, setItems] = React.useState([]);
    return(
        <div className="itembox">
            <table>
                <tr>
                    <th>Selected Products</th>
                    <th>CO2</th>
                </tr>
                {items.length}
                {items.push(item)}
            </table>
        </div>
    )
}
*/
const initialList = [
    {
      id: 'a',
      val: 'Robin',
    },
    {
      id: 'b',
      val: 'Dennis',
    },
  ];
   
  const Itembox = () => {
    const [list, setList] = React.useState(initialList);
    const [val, setName] = React.useState('');
   
    function handleChange(event) {
      setName(event.target.value);
    }
   
    function handleAdd() {
      const newList = list.concat({ val, id: uuidv4() });
   
      setList(newList);
   
      setName('');
    }
   
    return (
      <div>
        <AddItem
          val={val}
          onChange={handleChange}
          onAdd={handleAdd}
        />
   
        <List list={list} />
      </div>
    );
  };
   
  const AddItem = ({ val, onChange, onAdd }) => (
    <div>
      <input type="text" value={val} onChange={onChange} />
      <button type="button" onClick={onAdd}>
        Add
      </button>
    </div>
  );
   
  const List = ({ list }) => (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.val}</li>
      ))}
    </ul>
  );



export default Itembox;
