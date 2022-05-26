import { createContext, useState } from 'react';
import { sortFunc } from '../utils/sorterFunction';
import { parseData } from '../utils/csvParser';


export const MatchStatsContext = createContext();


const MatchStatsContextProvider = (props) => {

    const [matchStats, dispatchMatchStats] = useState(null)
    const [chartFilter, dispatchChartFilter] = useState("Athlete")
    const [sumOfValues, dispatchSumOfValues] = useState(null)

    const columnsArr = []
    const dataSourceArr = []

    parseData().then((result) => {
        const columns = result.data[5]

        columns.forEach(column => {
            columnsArr.push({
                title: column,
                dataIndex: column,
                key: column,
                sorter: (a, b) => { return sortFunc(a, b, column) },
                sortDirections: ['descend', 'ascend'],
            })
        });


        const newHighestValue = {}

        for (let i = 0; i < result.data.length - 6; i++) {

            const row = result.data[i + 6]
            const athleteData = { key: i }

            row.forEach((value, i) => {
                athleteData[columns[i]] = value

                const currentValue = {}
                currentValue[columns[i]] = value

                if (newHighestValue[columns[i]] === undefined) newHighestValue[columns[i]] = value
                else if (sortFunc(currentValue, newHighestValue, columns[i]) > 0) newHighestValue[columns[i]] = value
            })

            athleteData["Tags"] = []
            dataSourceArr.push(athleteData)
        }


        const newSumOfValues = {}

        dataSourceArr.forEach((athleteData, i) => {
            columns.forEach((column, x) => {
                const newValue = isNaN(parseInt(athleteData[column])) ? athleteData[column] === "X" ? 1 : 0 : parseInt(athleteData[column])
                if (newSumOfValues[column] === undefined) newSumOfValues[column] = newValue
                else newSumOfValues[column] += newValue

                if (x > 0)
                    if (sortFunc(athleteData, newHighestValue, column) >= 0 &&
                        athleteData[column] !== "0"
                    ) {
                        dataSourceArr[i]["Tags"].push(column)
                    }
            })
        })


        if (!matchStats)
            dispatchMatchStats({
                columns: columnsArr,
                dataSource: dataSourceArr,
            })
        if (!sumOfValues)
            dispatchSumOfValues(
                newSumOfValues
            )

    });


    return (
        <MatchStatsContext.Provider value={{
            matchStats, dispatchMatchStats,
            chartFilter, dispatchChartFilter,
            sumOfValues
        }}>
            {props.children}
        </MatchStatsContext.Provider>
    );
};


export default MatchStatsContextProvider;
