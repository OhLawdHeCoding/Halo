import {useState} from 'react';
import JSONDATA from '../Data.json';
import Databasebox from './Databasebox'
import SearchBar from '../Components/SearchBar';
import Popup from '../Components/Popup';

/* 

This file is responsible for the homepage of the website
and is located in App.js

The SearchBar component and help button (Popup) is a part of the homepage.
The databasebox is located in SearchBar, which is why its also displayed
in the hompage.  

*/
const Homepage = () => {

    return ( 
        <div className="homepagecontent">
        <SearchBar placeholder="Search..." data = {JSONDATA}/>
        <Popup />
      </div>
     );
}
 
export default Homepage;
