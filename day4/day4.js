let { 
    realBoards, realNumbers, testBoards, testNumbers 
} =require('./day4data.js');

// helper function for calculating winning board
function calculateScore(arr, num) {
    let sum = arr.flat()
                .filter(val => val != -1)
                .reduce((a,b) => a + b, 0)
    return sum * num
}

// helper function for winning, which takes input of #board,#row,#col 
function didWin(board,coord) {
    // row
    if (board[coord[0]].every(val => val === -1)) return true

    // col
    for (let i = 0; i < board[0].length; i++) {
        if (board[i][coord[1]] !== -1) return false
    }

    return true
}

// turn boards into nested arrays
function convertBoards(input) {
    let arr = input.split('\n')
    let newArr = [], tempArr = [], tempArrLen = 0
    arr.forEach(row => {
        if (row.length) {
            let currRow = row.split(' ').filter(val => val.length).map(num => parseInt(num))
            tempArr.push(currRow)
            tempArrLen++
            if (tempArrLen === 5) {
                newArr.push(tempArr)
                tempArr = [], tempArrLen = 0
            }
        }
    })
    return newArr
}

function bingo(numbers, boards) {
    let i = 0, currNum = -1;
    let nums = numbers.split(',').map(val => parseInt(val));
    let convertedBoards = convertBoards(boards);

    // create a dictionary of values to their coordinates
    let dict = {}
    for (let board = 0; board<convertedBoards.length; board++) {
        for (let row = 0; row<convertedBoards[0].length; row++) {
            for (let col = 0; col<convertedBoards[0][0].length; col++) {
                let val = convertedBoards[board][row][col];
                if (dict[val]) {
                    dict[val].push([board,row,col])
                } else {

                    dict[val] = [[board,row,col]]
                }
            }
        }
    }

    while (i < nums.length) {
        currNum = parseInt(nums[i])
        if (dict[currNum]) {
            let numOfCoords = dict[currNum].length;
            for (let j = 0; j < numOfCoords; j++) {
                let coordArr = dict[currNum][j]; // coordArr = [1,2,3] 

                // key into the board, set to -1
                convertedBoards[coordArr[0]][coordArr[1]][coordArr[2]] = -1

                // check if you win
                if (didWin(convertedBoards[coordArr[0]],[coordArr[1],coordArr[2]])) {
                    i = nums.length;
                    let score = calculateScore(convertedBoards[coordArr[0]],currNum)
                    console.log(score)
                }
            }
        }
        i++
    }
}


bingo(realNumbers,realBoards)

// cycle through array and create dictionary of values to coordinates
// {17: [#board,#row,#col], [1,4,2]...}

// cycle through numbers, then replace values at coordinates with -1

// after replacing a number, check to see if it wins

