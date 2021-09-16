import {useState} from 'react';


function Databasebox({data}) {
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
                    <tr>
                        <th>Product</th>
                        <th>CO2</th>
                    </tr>
                        {data.map((val, key) => { 
                            return <tr className="Product" key={key}><td>{val.Product}</td><td>{val.MeanC02}</td></tr>
                        })}
                    </table>
        </div>
     );
}

export default Databasebox;
