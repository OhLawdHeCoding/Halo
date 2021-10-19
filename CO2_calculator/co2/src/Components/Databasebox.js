import IncItemButton from './Itembuttons/IncItemButton';
import DecItemButton from './Itembuttons/DecItemButton';
import AddItemButton from './Itembuttons/AddItemButton';
import React, { useState } from 'react';
import TotalEmissions from './TotalEmissions';
import dispCO2 from './DisplayCO2';
import "../styling/Databasebox.css";
import dispChart from './Chart';
import Emissions from './Emissions';
import MobileBoxes from './MobileBoxes';
import useWindowDimensions from './GetWindowSize.js';
import CollapsibleEmissions from './Collapsible';


function Databasebox({ data }) {
    const [items, setItems] = React.useState([]);
    const [active, setActive] = useState(false); //Used in MobileBoxes.js if active is true we display itembox, otherwise we display databasebox 
    const { height, width } = useWindowDimensions(); //used to determine width to see if user is on mobile or not. Full hook can be found in GetWindowSize.js
    const [isMobile, setMobile] = useState(width < 1001); //if width< 1001 we switch to mobile version

    /*items:[
        {val:val, portions:[{portion, amount}]}
    ]//val is product: {Pruduct, MeanC02, id, PortionSize}
    //portion: {name, grams}
    */


    if (isMobile) {

        return (

            MobileBoxes(items, setItems, data, active, setActive, isMobile, setMobile)
        )
    } else {
        return (

            /*
            the <table> tag marks the start of the table. 
            <tr> marks the start of a row
            <th> marks the start of a header cell. "Products" and "Mean KGCO2 equivalent" in our case
            <td> indicates cell data. 
            -In our table a map function maps over all products given to us in 
             this components function call and returns them within rows of cell datas.  
            */


            <div className="boxes" >
                
                <div>
                    <div className="itembox">
                        <table className="itemboxTable">
                            <tr>
                                <th colspan="2"> {CollapsibleEmissions(items)}  </th>
                            </tr>
                            <tr>
                                <th>Product</th>
                                <th>CO2 Emission (kg)</th>
                            </tr>
                            {items.filter((i) => {
                                var all = false;
                                i.portions.forEach(element => {
                                    all |= element.amount > 0;
                                }); return all
                            }).map((item, key) => {
                                return <tr className="Product" key={key}><td><div className="itemBoxProduct">{item.val.Product}</div>
                                    <ul>{item.portions.filter(p => p.amount > 0).map((portionItem, key) => {
                                        return <div className="portionItem"><li key={key}>{portionItem.amount / portionItem.portion.grams}{" x " + portionItem.portion.name}
                                        {IncItemButton(portionItem, item, items, setItems)}{DecItemButton(portionItem, item, items, setItems)}</li></div>
                                    })}</ul></td><td className="MeanCO2" >{dispCO2(Math.round((parseFloat(item.val.MeanC02.replace(/,/g, ".")) * item.portions.reduce((portions, portion) => portion.amount / 1000 + portions, 0) + Number.EPSILON) * 100) / 100)}</td></tr>
                            })}
                        </table>
                    </div>
                    <div className="databasebox">

                        <table>
                            <tr>
                                <th>Product</th>
                                <th>CO2 (kg/kg)</th>
                            </tr>
                            {data.map((val, key) => {
                                return <tr className="Product" key={key}><td><div className="product">{val.Product}</div><AddItemButton val={val} items={items} setItems={setItems} />
                                </td><td>{dispCO2(val.MeanC02)}</td></tr>
                            })}
                        </table>
                    </div>

                </div>





            </div>

        );

    }

}

export default Databasebox;