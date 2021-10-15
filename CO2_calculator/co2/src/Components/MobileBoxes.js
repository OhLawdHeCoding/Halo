import react from "react";
import IncItemButton from './Itembuttons/IncItemButton';
import DecItemButton from './Itembuttons/DecItemButton';
import AddItemButton from './Itembuttons/AddItemButton';
import React, { useState } from 'react';
import TotalEmissions from './TotalEmissions';
import dispCO2 from './DisplayCO2';
import "../styling/Databasebox.css";
import dispChart from './Chart';
import Emissions from './Emissions';
import CollapsibleEmissions from './Collapsible';


function MobileBoxes(items, setItems, data, active, setActive, isMobile, setMobile) {

    if (active) {
        return (
            <div>
                <button className="TabButton" onClick={() =>
                    setActive(!active)
                }>switch tab
                </button>
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
                            return <tr className="Product" key={key}><td>{item.val.Product}
                                <ul>{item.portions.filter(p => p.amount > 0).map((portionItem, key) => {
                                    return <li key={key}>{portionItem.amount / portionItem.portion.grams}{" x " + portionItem.portion.name}
                                        {IncItemButton(portionItem, item, items, setItems)}{DecItemButton(portionItem, item, items, setItems)}</li>
                                })}</ul></td><td className="MeanCO2" >{dispCO2(Math.round((parseFloat(item.val.MeanC02.replace(/,/g, ".")) * item.portions.reduce((portions, portion) => portion.amount / 1000 + portions, 0) + Number.EPSILON) * 100) / 100)}</td></tr>
                        })}
                    </table>
                </div>
            </div>
        )

    } else {
        return (
            <div>
                <button className="TabButton" onClick={() =>
                    setActive(!active)
                }>switch tab
                </button>

                <div className="databasebox">

                    <table>

                        <tr className>
                            <th>Product</th>
                            <th>CO2 (kg/kg)</th>
                        </tr>

                        {data.map((val, key) => {
                            return <tr className="Product" key={key}><td>{val.Product}<AddItemButton val={val} items={items} setItems={setItems} />
                            </td><td>{dispCO2(val.MeanC02)}</td></tr>

                        })}
                    </table>
                </div>
            </div>
        )
    }

}
export default MobileBoxes;