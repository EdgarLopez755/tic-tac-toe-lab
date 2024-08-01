/*-------------------------------- Constants --------------------------------*/

const squareEls = document.querySelectorAll('.sqr')

const messageEl = document.getElementById('message')


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








console.log(squareEls)

console.log(messageEl)









/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game.


let board = ['', '', '',
             '', '', '',
             '', '', '']

let turn = 'X'

let winner = false

let tie = false








/*------------------------ Cached Element References ------------------------*/











/*-------------------------------- Functions --------------------------------*/

const init = () => { 
    board = [
        'X', 'O', '',
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

init()









/*----------------------------- Event Listeners -----------------------------*/











//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
