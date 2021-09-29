import IncItemButton from './Itembuttons/IncItemButton';
import DecItemButton from './Itembuttons/DecItemButton';
import AddItemButton from './Itembuttons/AddItemButton';
import React, { useState } from 'react';



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
                        <th>Product</th>
                        <th>CO2 per kilo</th>
                    </tr>
                    {items.filter((i) => {//denna funktionen kolla returnerar endast de items 
                        var all = false;//som har en portion med amount>1 
                        i.portions.forEach(element => {
                            all |= element.amount > 0;
                        }); return all
                    }).map((item, key) => {
                        /*
                        efter att vi filtrerat bort alla items som saknar portions 
                        så itererar vi över dem och returnerar en rad som innehåller
                        diverse annat material, se fortsättning
                        */
                        return <tr className="Product" key={key}><td>{item.val.Product}
                            <ul>{item.portions.filter(p => p.amount > 0).map((portionItem, key) => {
                                /*
                                För varje val, item, ex "Wheat" itererar vi över dess tillagda portioner.
                                Portioner med amount <=0 sorteras bort. Varje portion returnerar ett list item "<li>"
                                som innehåller vad portionen heter samt en inc/dec-knapp
                                */
                                return <li key={key}>{portionItem.amount / portionItem.portion.grams}{" x " + portionItem.portion.name}
                                    {IncItemButton(portionItem, item, items, setItems)}{DecItemButton(portionItem, item, items, setItems)}</li>
                            })}</ul></td><td>{<font color={("hsl("+(item.val.MeanC02)+", 100%, 50%)")}>{item.val.MeanC02}</font>}</td></tr>
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
