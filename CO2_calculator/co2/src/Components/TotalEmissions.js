

function TotalEmissions(items) {

    var totalEmissions = items.reduce((totalEmissions, item) => 
        parseFloat(
            item.val.MeanC02.replace(/,/g, ".")) * item.portions.reduce((portions, portion) => portion.amount/1000 + portions , 0)
        + totalEmissions , 0);

    return totalEmissions;

}

export default TotalEmissions;
