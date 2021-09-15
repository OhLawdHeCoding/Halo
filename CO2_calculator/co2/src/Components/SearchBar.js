import React from 'react'

function SearchBar({ placeholder, data }) {
    return (
        <div className="search">          
            <div className="container"> 
                <input type="text" placeholder={ placeholder }/>
                <div className="searchIcon">
                    
             </div>   
            </div> 
            <div className="data"></div>
        </div>
    );
}

export default SearchBar


