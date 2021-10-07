import Chart from "react-google-charts";

function dispChart(items) {
    //var arr = [];
    //console.log(items.length);
    //for (var i = 0; i < items.length; i++) {
    //    arr.push(['hej ' + i, 1])
    //}
    //console.log(arr);
    //var arr2 = items.map((value) => { return ([value.val.Product, 1]) })
    //console.log(arr2);
    return (
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['food', 'CO2'],
                ['schmeat', 11],
                ['schmeese', 2],
                ['bread', 2],
                ['potat', 2],
                ['borgir', 7]
            ]}
            options={{
                title: 'food',
            }}
            rootProps={{ 'data-testid': '1' }}
        />);
}

export default dispChart;