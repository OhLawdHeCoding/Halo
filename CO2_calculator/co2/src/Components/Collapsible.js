import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import TotalEmissions from './TotalEmissions';
import dispChart from './Chart';
import '../styling/Collapsable.css';



function CollapsibleEmissions(items) {
    const styles = {
        width: "500px"
    }
    //const a = 1;
    if (items.length == 0) {
        return;
    }
    else {
        return (
            <Collapsible trigger={<div className="Collapsable">{TotalEmissions(items) + " Kg CO2 equivalent (click me!)"}</div>}>
                <p>
                    {dispChart(items)}
                </p>

            </Collapsible>
        )
    }
}

export default CollapsibleEmissions;