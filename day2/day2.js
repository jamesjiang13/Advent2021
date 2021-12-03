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

positioning(realData);
