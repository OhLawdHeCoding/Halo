import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import TotalEmissions from './TotalEmissions';
import dispChart from './Chart';



function CollapsibleEmissions(items) {
    const [isShown, setIsShown] = useState(false);
    const styles = {
        width: "500px"
    }
    //const a = 1;
    if (items.length == 0) {
        return;
    }
    else {
        return (
            <Collapsible trigger={TotalEmissions(items) + " Kg"}>
                <p>
                    {dispChart(items)}
                </p>

            </Collapsible>
        )
    }
}

export default CollapsibleEmissions;