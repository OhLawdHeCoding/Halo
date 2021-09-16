import React from 'react'
import JSONDATA from '../Data.json';
import { useState } from 'react';

function SearchBar({ placeholder, data }) {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="search">          
            <div className="container"> 
            <input type="text" placeholder={placeholder} onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }
                    } />
                    <table>
                        <tr>
                        <th>Product</th>
                        <th>CO2</th>
                        </tr>
                        {JSONDATA.filter((val)=>{
                        if (searchTerm == ""){
                            return val
                        } else if (val.Product.toLowerCase().includes(searchTerm.toLowerCase()))
                        return val
                        }).map((val, key) => {
                        return <tr className="Product" key={key}><td>{val.Product}</td><td>{val.MeanC02}</td></tr>
                        })}
                    </table>
                <div className="searchIcon">  
             </div>   
            </div> 
            <div className="data"></div>
        </div>
    );
}

export default SearchBar


