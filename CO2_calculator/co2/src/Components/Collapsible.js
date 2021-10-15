import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import TotalEmissions from './TotalEmissions';
import dispChart from './Chart';
import '../styling/Collapsable.css';



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
            <Collapsible trigger={<div className="Collapsable">{TotalEmissions(items) + " Kg"}</div>}>
                <p>
                    {dispChart(items)}
                </p>

            </Collapsible>
        )
    }
}

export default CollapsibleEmissions;