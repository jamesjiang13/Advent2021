let { testLines, realLines } =require('./day5data.js');

// helper function to return all points between two points
function getLine(coordinates) {
    let start = coordinates[0].split(',')
    let end = coordinates[1].split(',')
    let x1 = parseInt(start[0]), y1 = parseInt(start[1]),
        x2 = parseInt(end[0]), y2 = parseInt(end[1]);

    let line = []
    if (x1 === x2 || y1 === y2) {

        let xDiff = Math.abs(x1 - x2)
        let yDiff = Math.abs(y1 - y2)
    
        if (xDiff === 0) { // vertical
            if (y1 > y2) {
                for (let i = 0; i <= yDiff; i++) {
                    let newY = i + y2;
                    line.push([x1, newY])
                }
            } else {
                for (let i = 0; i <= yDiff; i++) {
                    let newY = i + y1;
                    line.push([x1,newY])
                }
            }
        } else { // horizontal
            if (x1 > x2) {
                for (let i = 0; i <= xDiff; i++) {
                    let newX = i + x2;
                    line.push([newX, y1])
                }
            } else {
                for (let i = 0; i <= xDiff; i++) {
                    let newX = i + x1;
                    line.push([newX,y1])
                }
            }
        }
    }
    
    return line 
}

function deconstructLines(str) {
    let newLines = str.split('\n')
                        .map(coord => coord.split(' -> '))
    newLines.forEach(pair => {
        pair.map(point => {
            point.split(',')
        })
    })

    return newLines
}

function dangerPoints(lines) {
    let coords = deconstructLines(lines);
    let newCoord = {}, oldCoord = {}, count = 0

    coords.forEach(coord => {
        let linePoints = getLine(coord);
        linePoints.forEach(point => {
            if (!newCoord[point] && !oldCoord[point]) {
                newCoord[point] = true;
            } else if (newCoord[point] && !oldCoord[point]) {
                newCoord[point] = false
                oldCoord[point] = true
                count++
            }
        })
    })

    return count
}
// create two dicts: uncross, crossed
// create count of danger
// go through each pair of line points, cycle through line, get a point
// if point !in uncrossed, add to uncrossed
// if point in uncrossed && !in crossed: remove from uncrossed, add to crossed, danger++

console.log(dangerPoints(realLines))