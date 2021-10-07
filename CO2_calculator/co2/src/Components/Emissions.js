
// A function that returns a number disclosing the total emissions of all the items in the users list
function Emissions(items) {

    var Data = [
        ['food', 'CO2']
    ];
    items.reduce((items,item) => Data.push([item.val.Product, item.portions.reduce((portions,portion) => portion.amount/1000 + portions,0)]), 0)
    console.log(Data)
    return Data;
}

export default Emissions;

