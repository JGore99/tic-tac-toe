/*-------------------------------- Constants --------------------------------*/

  let turn = "X"
  let gameOver = false
  let spaces = [
    null, null, null, 
    null, null, null,
    null, null, null
  ]

  




/*---------------------------- Variables (state) ----------------------------*/
// who's turn? game over 


/*------------------------ Cached Element References ------------------------*/
const message = document.getElementById("message")
// const board = document.querySelector(".board") 
const boardSquares =[...document.querySelectorAll(".square")] 

/*----------------------------- Event Listeners -----------------------------*/
// board.addEventListener("click", playersMove)

// for (const boardSquare of boardSquares) {
//   boardSquare.addEventListener("click", playersMove)
// }

boardSquares.forEach((boardSquare, idx) => {
  boardSquare.addEventListener("click", playersMove)
})
console.log(boardSquares)

/*-------------------------------- Functions --------------------------------*/

function updateSpacesArray(){
  
}

function playersMove(e) {
  // squareIndex = boardSquares[i]
  // if (e.target.hasAttribute("disable"))

    if (turn === "X"){
      e.target.innerText = "X"
      turn = "O"
      console.dir(e.target
    } else if (turn === "O"){
      e.target.innerText = "O"
      turn = "X"
      
    } 

}

function reset(){

}

// console.dir(boardSquares.item)


// - Display an empty tic-tac-toe board when the page is initially displayed.
  // DONE  
// - A player can click on the nine cells to make a move.
  // clickEvent on section "board"
// - Every click will alternate between marking an `X` and `O`.
// DONE
// - Once occupied with an `X` or `O`, the cell cannot be played again.
// DONE
// - Provide a `Reset Game` button that will clear the contents of the board.
 // show / hide button, click event to trigger game reset
// - Display whose turn it is (“X” or “O”).

// - Provide win logic and display a winning message.

// - Provide logic for a cat’s game (tie), also displaying a message.
  // if no remaming cells game is tie, w/ message:


// 1) Define the required variables used to track the state of the game:
// stateOfGame
// 2) Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:
    // create game object

// 3) Upon loading, the app should:
// 	3.1) Call an initialize function to initialize the state variables
// 	3.2) Render those values to the page
// 	3.3) Wait for the user to click a square
    //
// 4) Define the required constants
    // player turn, is game over
// 5) Handle a player clicking a square
    //click eventHandler changes content of square
// 6) Handle a player clicking the replay button
    //Restart function clears everything, returns to starting point.