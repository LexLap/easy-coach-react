import Papa from 'papaparse';
const csvFile = require("../data/stats.csv")


export const parseData = () => {
    return new Promise(function (complete, error) {
        Papa.parse(csvFile, { download: true, complete, error });
    })
}
