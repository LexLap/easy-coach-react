import Chart from "react-apexcharts";
import { useContext } from "react";
import { MatchStatsContext } from "../../context/MatchStatsContext";

const BarChart = () => {

    const { matchStats, chartFilter, sumOfValues } = useContext(MatchStatsContext)

    const data = chartFilter !== "Started" ?
        matchStats?.dataSource.map((elm) => elm[chartFilter])
        :
        matchStats?.dataSource.map((elm) => {
            if (elm[chartFilter] === "X") return 1
            else return 0
        });

    const average = sumOfValues ? sumOfValues[chartFilter] / matchStats?.dataSource?.length : 0

    const options = matchStats ? {

        stroke: {
            width: [0, 15]
        },
        chart: {
            id: "chart-bar"
        },
        xaxis: {
            categories: matchStats.dataSource.map((elm) => elm.Athlete.split(' ')[2])
        },
        title: {
            text: `Displaying statistics: ${chartFilter}`,
            align: 'center',
            style: {
                color: '#444'
            }
        }
    } : {}

    const series = matchStats ? [
        {
            name: chartFilter,
            type: 'column',
            data
        },
        {
            name: "Average",
            type: "line",
            data: data.map(() => average)
        },

    ] : []


    return (
        <>
            <div style={{ height: "40%" }}>
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width="100%"
                    height="100%"
                />
            </div>
        </>
    );
}


export default BarChart;
