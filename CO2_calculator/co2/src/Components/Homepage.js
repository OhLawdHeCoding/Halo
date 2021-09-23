import {useState} from 'react';
import JSONDATA from '../Data.json';
import Databasebox from './Databasebox'
import SearchBar from '../Components/SearchBar';
import YourItemsBox from './YourItemsbox';

const Homepage = () => {

    return ( 
        <div className="homepagecontent">
        <YourItemsBox props = "theItemBox"/>
        <SearchBar placeholder="Search..." data = {JSONDATA}/>
      </div>
     );
}
 
export default Homepage;
