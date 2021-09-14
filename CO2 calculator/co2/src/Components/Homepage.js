import {useState} from 'react';
import Infobox from './Infobox';
import YourItemsbox from './YourItemsbox';
import Databasebox from './Databasebox'

const Homepage = () => {

    return ( 
        <div className="homepage">
            <Infobox/>
            <YourItemsbox/>
        </div>
     );
}
 
export default Homepage;

