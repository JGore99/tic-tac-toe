/*---------------------------- Variables (state) ----------------------------*/
// who's turn? game over 
let playerTurn = 1
let isWinner = null//win lose tie
let gameMessage = "It is X's turn!"
let boardState = [
    null, null, null, 
    null, null, null,
    null, null, null
  ]

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

/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById("message")
const board = document.querySelector(".board") 
const messageEl = document.getElementById("message")
const resetBtn = document.querySelector(".reset")
const boardSquares = [...document.querySelectorAll(".square")] 

/*----------------------------- Event Listeners -----------------------------*/

board.addEventListener("click", handleClick)
resetBtn.addEventListener("click", init)

init()

function init(){
  playerTurn = 1
  gameOver = false
  isWinner = null
  boardState = [
    null, null, null, 
    null, null, null,
    null, null, null
  ]

  boardSquares.forEach((boardSquare) => {
    boardSquare.innerText = ""
  })

  isWinner = null
  handleMessage()
  render()
}

function handleClick(e) {
  let targetId = e.target.id 
  let squareIndex = parseInt(targetId.slice(2))
  if (boardState[squareIndex] === null){
    playerTurn === 1 ? boardState[squareIndex] = -1 : boardState[squareIndex] = 1
  }
  playerTurn = playerTurn * -1
  render()
  getWinner()
  handleMessage()
}  


function render(){ //ADD CONDITIONAL STYLING HERE
  if (gameOver === false){
    boardSquares.forEach((square, idx) => {
      // square.innerText = boardState[idx]
      //boardState[idx] === -1 ? square.innerText = "X" : square.innerText = "O"
      if (boardState[idx] === -1){
        square.innerText = "X"
      } else if (boardState[idx] === 1){
        square.innerText = "O"
      }
    })
  }
  
  console.log("isWinner22", isWinner)
}

function handleMessage(){
  console.log("winner", isWinner)
  playerTurn === 1 ? gameMessage = "It's X's Turn" : gameMessage = "It's O's Turn"
  if (isWinner === -3){
    gameMessage = "Congrats! X Won!"
  } else if (isWinner === 3){
    gameMessage = "Congrats! O Won!"
  } else if (isWinner === "T") {
    gameMessage = "It's a Tie"
  }
  message.innerText = gameMessage
  render()
}
  


function getWinner(){
  console.log("firing")
  winningCombos.forEach((winningLine) => {
    let total = 0
    winningLine.forEach((item) => {
      total = total + boardState[item]
      if (total === 3 || total === -3){
        isWinner = total 
        gameOver = true  
      // } else if (boardState.includes(null) && isWinner !== total) {
      //   isWinner = "T"
      }
    })
  })
  // if (boardState.includes(null) && isWinner === null) {
  //   isWinner = null
  // } else {
  //   isWinner = "T"
  // }
  console.log("isWinner", isWinner)
}