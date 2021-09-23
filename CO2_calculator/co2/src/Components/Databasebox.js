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
        <div>
            <div className="itembox"> 
            <table>
                <tr>
                    <th>Product</th>
                    <th>Amount (KG)</th>
                    <th>CO2 per kilo</th>
                </tr>
                {items.map((val, key) => {
                    return <tr className="Product" key={key}><td>{val[0].Product}<button onClick={() => setItems(()=>{
                        console.log("Decrement clicked...");
                        console.log("ID: "+val[0].id);
                        console.log("Product: "+val[0].Product);
                        var index = items.findIndex(item => item[0].id === val[0].id)
                        if (index !== -1){
                            var amount = items[index][1];
                            console.log("index: "+index);
                            if (amount === 1){
                                console.log("remove");
                                return [...items.splice(index, 1)];
                            }
                            else {
                                console.log("Pre dec: "+amount);
                                items[index][1]-=1; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
                                console.log("decremented to: "+items[index][1]);
                                return [...items];
                            }
                        } else return [...items];                       
                    }
                    )}> -1 </button>
                        <button onClick={() => setItems(()=>{
                                console.log("Increment clicked...");
                                console.log("ID: "+val[0].id);
                                console.log("Product: "+val[0].Product);
                                var index = items.findIndex(item => item[0].id === val[0].id)
                                console.log("index: "+index);
                                if (index === -1){
                                    console.log("added");
                                    return [...items, [val[0], 1]];
                                }
                                else {
                                    console.log("Pre inc: "+items[index][1]);
                                    items[index][1]+=1; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
                                    console.log("incremented to: "+items[index][1]);
                                    return [...items];
                                }                       
                            }
                            )}> +1 </button>
                    </td><td>{((val[1]-1)/2)+1}</td><td>{val[0].MeanC02}</td></tr>
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
                        return <tr className="Product" key={key}><td>{val.Product}
                            <button onClick={() => setItems(()=>{
                                    console.log("Add clicked...");
                                    console.log("ID: "+val.id);
                                    console.log("Product: "+val.Product);
                                    var index = items.findIndex(item => item[0].id === val.id)
                                    console.log("index: "+index);
                                    if (index === -1){
                                        console.log("added");
                                        return [...items, [val, 1]];
                                    }
                                    else {
                                        console.log("Pre inc: "+items[index][1]);
                                        items[index][1]+=1; //tror denna koden kör två ggr per klick. Konstigt dock att console loggarna inte gör det
                                        console.log("incremented to: "+items[index][1]);
                                        return [...items];
                                    }
                                }
                                )}> add </button>
                        </td><td>{val.MeanC02}</td></tr>
                    })}
                </table>
            </div>
        </div>
    );
}

export default Databasebox;
