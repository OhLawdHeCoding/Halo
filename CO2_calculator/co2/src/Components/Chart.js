import Chart from "react-google-charts";
function dispChart(items) {
    var arr = [];
    console.log(items.length);
    for (var i = 0; i < items.length; i++) {
        arr.push(['hej ' + i, 1])
    }
    console.log(arr);
    var arr2 = items.map((value) => { return ([value.val.Product, 1]) })
    console.log(arr2);
    return (
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={arr2}

            /*{[
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7],
            ]}*/
            options={{
                title: 'My Daily Activities',
            }}
            rootProps={{ 'data-testid': '1' }}
        />);
}

export default dispChart;