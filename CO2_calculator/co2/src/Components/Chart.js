import Chart from "react-google-charts";
import Emissions from "./Emissions";

function dispChart(items) {


    if (items.length == 0) {
        return (": Add items to display chart");
    }


    return (
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={Emissions(items)}
            rootProps={{ 'data-testid': '1' }}
        />);

}

export default dispChart;