let {realData, testData} =require('./day1data.js');

function countIncreases(data) {
    let count = 0;
    let dataArr = data.split('\n');
    for (let i = dataArr.length-1; i > 0; i--) {
        if (parseInt(dataArr[i]) > parseInt(dataArr[i-1])) count++
    }
    console.log(count)
    return count;
}

function countTriples(data) {
    let count = 0;
    let dataArr = data.split('\n');
    let i = 1, j = 2, k = 3,
        firstSum = parseInt(dataArr[0]) + parseInt(dataArr[1]) + parseInt(dataArr[2]),
        secondSum = 0;

    while (k < dataArr.length) {
        secondSum = parseInt(dataArr[i]) + parseInt(dataArr[j]) + parseInt(dataArr[k])
        if (secondSum > firstSum) count++
        firstSum = secondSum
        i++; j++; k++
    }
    
    console.log(count)
    return count
}

// countIncreases(realData)
// countIncreases(testData)

// countTriples(testData)
// countTriples(realData)