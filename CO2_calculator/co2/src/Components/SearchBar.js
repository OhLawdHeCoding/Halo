import React from 'react'
import { useState } from 'react';
import Databasebox from './Databasebox';

function SearchBar({ placeholder, data }) {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="search">          
            <div className="container"> 
            
            <input type="text" placeholder={placeholder} onChange={(event) => {
                        setSearchTerm(event.target.value);
                        
                    }
                    
                    } />
                   
                    <Databasebox data={data.filter((val)=>{ //Databasebox takes the filtered data and displays it in a table
                            if (searchTerm == ""){
                                return val
                            } else if (val.Product.toLowerCase().includes(searchTerm.toLowerCase()))
                                return val
                            })
                        }
                    />
                     <div className="searchIcon"> </div>       
            </div> 
            <div className="data"></div>
        </div>
    );
}

export default SearchBar


