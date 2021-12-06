const { testData, realData } = require('./day3data.js');

function diagnostic(input) {
    var inputArr = input.split('\n'), gammaStr = '', epsilonStr = '', i = 0;
    
    while (i < inputArr[0].length) {
        let zero = 0, one = 0;
        inputArr.forEach((row) => {
            (row[i] === '0' ? zero++ : one++)
        })
        if (zero > one) {
            gammaStr += '0'
            epsilonStr += '1'
        } else {
            gammaStr += '1'
            epsilonStr += '0'
        }
        i++
    }

    let gamma = parseInt(gammaStr, 2),
        epsilon = parseInt(epsilonStr, 2);

    let powerConsumption = gamma * epsilon;
    console.log(powerConsumption)
}

function lifeSupport(input) {
    var inputArr = input.split('\n'),
        oxygenArr = inputArr,
        co2Arr = inputArr, 
        i = 0;
    
    while (i < inputArr[0].length && (oxygenArr.length > 1 || co2Arr.length > 1)) {
        let zeroOxy = 0, oneOxy = 0;
        let zeroCo2 = 0, oneCo2 = 0;
        
        // iterate once through values to determine more 0 or more 1
        oxygenArr.forEach((row) => {
            (row[i] === '0' ? zeroOxy++ : oneOxy++)
        })

        co2Arr.forEach((row) => {
            (row[i] === '0' ? zeroCo2++ : oneCo2++)
        })

        let tempOxygen = [], tempCo2 = [];

        // cycle through answer and indicies and add matches to new array if 
        
        // pulling valid values for oxygen
        if (oneOxy >= zeroOxy && oxygenArr.length > 1) {
            oxygenArr.forEach((row) => {
                if (row[i] == '1') tempOxygen.push(row)
            })
        } else {
            oxygenArr.forEach((row) => {
                if (row[i] == '0') tempOxygen.push(row)
            })
        }   

        // pulling valid values for co2
        if (oneCo2 >= zeroCo2 && co2Arr.length > 1) {
            co2Arr.forEach((row) => {
                if (row[i] == '0') tempCo2.push(row)
            })
        } else {
            co2Arr.forEach((row) => {
                if (row[i] == '1') tempCo2.push(row)
            })
        } 

        if (tempOxygen.length) oxygenArr = tempOxygen
        if (tempCo2.length) co2Arr = tempCo2
        i++
    }

    console.log(oxygenArr)
    console.log(co2Arr)

    let oxygen = parseInt(oxygenArr[0], 2),
        co2 = parseInt(co2Arr[0], 2);

    let lifeSupportRating = oxygen * co2;
    console.log(lifeSupportRating)
}

// diagnostic(realData)
lifeSupport(realData)