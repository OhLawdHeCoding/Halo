import IncItemButton from './Itembuttons/IncItemButton';
import DecItemButton from './Itembuttons/DecItemButton';
import AddItemButton from './Itembuttons/AddItemButton';
import React, { useState } from 'react';
import TotalEmissions from './TotalEmissions';
import "../styling/Databasebox.css";


function Databasebox({ data }) {
    const [items, setItems] = React.useState([]);
    /*items:[
        {val:val, portions:[{portion, amount}]}
    ]//val is product: {Pruduct, MeanC02, id, PortionSize}
    //portion: {name, grams}
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
                    <th colspan="2">Totalt CO2: {TotalEmissions(items)} Kg</th>
                </tr>
                <tr>
                    <th>Product</th>
                    <th>CO2 per kilo</th>
                </tr>
                {items.filter((i)=>{
                    var all = false;
                    i.portions.forEach(element => {
                        all |= element.amount>0;
                    }); return all}).map((item, key) => {
                    return <tr className="Product" key={key}><td>{item.val.Product}
                    <ul>{item.portions.filter(p => p.amount>0).map((portionItem, key)=>{return <li key={key}>{portionItem.amount/portionItem.portion.grams}{" x "+portionItem.portion.name}
                    {IncItemButton(portionItem, item, items, setItems)}{DecItemButton(portionItem, item, items, setItems)}</li>})}</ul></td><td>{<font color={("hsl("+(item.val.MeanC02)+", 100%, 50%)")}>{item.val.MeanC02}</font>}</td></tr>
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
