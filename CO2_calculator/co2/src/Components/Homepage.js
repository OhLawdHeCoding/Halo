import {useState} from 'react';
import JSONDATA from '../Data.json';
import Databasebox from './Databasebox'
import SearchBar from '../Components/SearchBar';
import Popup from '../Components/Popup';

const Homepage = () => {

    return ( 
        <div className="homepagecontent">
        <SearchBar placeholder="Search..." data = {JSONDATA}/>
        <Popup />
      </div>
     );
}
 
export default Homepage;
