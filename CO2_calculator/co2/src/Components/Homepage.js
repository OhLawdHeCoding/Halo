import {useState} from 'react';
import JSONDATA from '../Data.json';
import Databasebox from './Databasebox'
import SearchBar from '../Components/SearchBar';

const Homepage = () => {

    return ( 
        <div className="homepagecontent">
        <SearchBar placeholder="Search..." data = {JSONDATA}/>
      </div>
     );
}
 
export default Homepage;
