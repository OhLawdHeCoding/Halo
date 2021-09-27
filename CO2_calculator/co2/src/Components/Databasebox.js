import IncItemButton from './Itembuttons/IncItemButton';
import DecItemButton from './Itembuttons/DecItemButton';
import AddItemButton from './Itembuttons/AddItemButton';
import React, { useState } from 'react';



function Databasebox({ data }) {
    const [items, setItems] = React.useState([]);
    /*items:[
        {val:val, portions:[{portion, amount}]}
    ]//val is product: {Pruduct, MeanC02, id, PortionSize}
    */
    return (
        /*
        the <table> tag marks the start of the table. 
        <tr> marks the start of a row
        <th> marks the start of a header cell. "Products" and "Mean KGCO2 equivalent" in our case
        <td> indicates cell data. 
        -In our table a map function maps over all products given to us in 
         this components function call and returns them within rows of cell datas.  
        */
        <div className="boxes">
            <div className="itembox"> 
            <table>
                <tr>
                    <th>Product</th>
                    <th>CO2 per kilo</th>
                </tr>
                {items.map((item, key) => {
                    return <tr className="Product" key={key}><td>{item.val.Product}
                    <ul>{item.portions.map((portionItem, key)=>{return <li>{portionItem.amount/portionItem.portion.grams}{" x "+portionItem.portion.name}
                    {IncItemButton(portionItem, item, items, setItems)}{DecItemButton(portionItem, item, items, setItems)}</li>})}</ul></td><td>{item.val.MeanC02}</td></tr>
                })}
            </table>
            </div>
            <div className="databasebox">
                
                <table>
                    <tr>
                        <th>Product</th>
                        <th>CO2</th>
                    </tr>
                    {data.map((val, key) => {
                        return <tr className="Product" key={key}><td>{val.Product}{AddItemButton(val, items, setItems)}
                            
                        </td><td>{val.MeanC02}</td></tr>
                    })}
                </table>
            </div>
        </div>
    );
}

export default Databasebox;
