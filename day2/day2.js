let {realData, testData} =require('./day2data.js');

function positioning(instructions) {
    let depth = 0, horiz = 0;
    let instrucArr = instructions.split('\n');

    instrucArr.forEach((command) => {
        let parts = command.split(' ');
        let magnitude = parseInt(parts[1])
        switch (parts[0]){
            case 'forward':
                horiz += magnitude
                break
            case 'down':
                depth += magnitude
                break
            case 'up':
                depth -= magnitude
                break
        }
    })
    
    let res = depth * horiz
    console.log(res)
}

function manualPositioning(instructions) {
    let depth = 0, horiz = 0, aim = 0;
    let instrucArr = instructions.split('\n');

    instrucArr.forEach((command) => {
        let parts = command.split(' ');
        let magnitude = parseInt(parts[1])
        switch (parts[0]){
            case 'forward':
                horiz += magnitude
                depth += aim * magnitude
                break
            case 'down':
                aim += magnitude
                break
            case 'up':
                aim -= magnitude
                break
        }
    })
    
    let res = depth * horiz
    console.log(res)
}

// positioning(realData);
manualPositioning(realData);
