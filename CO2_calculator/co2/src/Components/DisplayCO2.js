import React from 'react'

function dispCO2(CO2) {
    var co2 = parseInt(CO2);
    if (co2>100)
        return (
            <div style={{color: "red"}}>
                {CO2}
            </div>
        );
    if (co2>20)
        return (
            <div style={{color: "orange"}}>
                {CO2}
            </div>
        );
    if (co2<=50)
        return (
            <div style={{color: "green"}}>
                {CO2}
            </div>
        );
    else {
        return (
            <div style={{color: "red"}}>
                color not identified :( {CO2}
            </div>
        );
    }
}

export default dispCO2;