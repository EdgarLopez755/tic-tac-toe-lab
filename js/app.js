/*-------------------------------- Constants --------------------------------*/

//5) Define the required constants.

const squareEls = document.querySelectorAll('.sqr')



const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


















/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game.


let board = ['', '', '',
             '', '', '',
             '', '', '']

let turn = 'X'

let winner = false

let tie = false








/*------------------------ Cached Element References ------------------------*/

//2) Store cached element references.

const messageEl = document.getElementById('message')

const resetBtnEl = document.getElementById('reset')









/*-------------------------------- Functions --------------------------------*/

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

const init = () => { 
    board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ]
   render()
   

}

console.log(init)

const render = () => {
    updateBoard()
    updateMessage()

}


const updateBoard = () => {
    board.forEach((cell, index) => {
        squareEls[index].textContent = cell
    })
}
   
        
    
console.log(updateBoard)



const updateMessage = () => {
    if (!winner && !tie) {
        messageEl.textContent = `It's ${turn}'s turn`
    } else if (!winner && !tie) {
        messageEl.textContent = 'It is a tie!'
    } else {
        messageEl.textContent = `${winner} has won!`
    }
}


//6) Handle a player clicking a square with a `handleClick` function.

const handleClick = (event) => {
    const clickedSquare = event.target
    const squareIndex = parseInt(clickedSquare.id)
    if (board[squareIndex] !== '') return;

    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
  
    }

    const placePiece = (index) => { 
        board[index] = turn;

    }
    console.log(board)

    //4) The state of the game should be rendered to the user.

    const checkForWinner = () => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        winningCombos.forEach(combo => {
        if (
            board[combo[0]] !== '' &&
            board[combo[0]] === 
            board[combo[1]] &&
            board[combo[0]] ===
            board[combo[2]]
        ) {
            winner = board[combo[0]]
        }
        })
        
    }
    console.log(winner)


    const checkForTie = () => {
        if (!winner && board.every(cell => cell !== '')) {
            tie = true
        }

    }
    console.log(true)

const switchPlayerTurn = () => {
    if (!winner) {
        turn = turn === 'X' ? 'O' : 'X'
    }
}

console.log(turn)




   









/*----------------------------- Event Listeners -----------------------------*/


squareEls.forEach(square => {
    square.addEventListener('click', handleClick)
})

//7) Create Reset functionality.

resetBtnEl.addEventListener('click', init)

init()



















