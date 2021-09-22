import AddButton from './AddItemButton';
import React, { useState } from 'react';



function Databasebox({ data }) {
    const [items, setItems] = React.useState([]);
    return (
        /*
        the <table> tag marks the start of the table. 
        <tr> marks the start of a row
        <th> marks the start of a header cell. "Products" and "Mean KGCO2 equivalent" in our case
        <td> indicates cell data. 
        -In our table a map function maps over all products given to us in 
         this components function call and returns them within rows of cell datas.  
        */
        <div className="databasebox">
            <table>
<<<<<<< HEAD
                <tr>
                    <th>Product</th>
                    <th>CO2</th>
                    <th>Tags</th>
                </tr>
                {data.map((val, key) => {
                    return <tr className="Product" key={key}><td>{val.Product}
                        <button onClick={() => setItems([...items, val.Product])}> add </button>
                    </td><td>{val.MeanC02}</td><td>{val.Tags}</td></tr>
                })}
            </table>
=======
                    <tr>
                        <th>Product</th>
                        <th>CO2</th>
                        
                    </tr>
                        {data.map((val, key) => { 
                            return <tr className="Product" key={key}><td>{val.Product} <AddButton/></td><td>{val.MeanC02}</td></tr>
                        })}
                    </table>
>>>>>>> 79d4b8ec9e0e7834f27f7c0f9713d4f80e058a06
        </div>
    );
}

export default Databasebox;
