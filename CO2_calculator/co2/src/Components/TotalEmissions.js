
// A function that returns a number disclosing the total emissions of all the items in the users list
function TotalEmissions(items) {

    // Calculates the total emission
    var totalEmissions = items.reduce((totalEmissions, item) => 
        parseFloat(
            item.val.MeanC02.replace(/,/g, ".")) * item.portions.reduce((portions, portion) => portion.amount/1000 + portions , 0)
        + totalEmissions , 0);

    // Rounds the number to two at max decimals and returns
    return Math.round((totalEmissions + Number.EPSILON) * 100) / 100;

}

export default TotalEmissions;
