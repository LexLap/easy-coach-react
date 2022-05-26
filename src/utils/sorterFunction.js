
export const sortFunc = (a, b, column) => {

    sessionStorage.setItem("chartFilter", column)

    if (a[column].length === 0 || a[column] === "X") { return a[column].length - b[column].length }
    else if (a[column].indexOf("%") > -1) {
        if (a[column].length < 6)
            return a[column].split('%')[0] - b[column].split('%')[0]
        else
            return a[column].split('/')[0] - b[column].split('/')[0]
    }
    else if (column === "Athlete") return a[column].split(' ')[0] - b[column].split(' ')[0]
    else return a[column] - b[column]
}