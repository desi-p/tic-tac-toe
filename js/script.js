//grabbing tiles from html doc
let tiles = Array.from(document.querySelectorAll('.tile'))

//array for all winning combinations
const winCons = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

//setting arrays to show players choices (will use to compare to the winning combinations later
let player1State = []

let player2State = []


//event listener for reset button:
let resetBtn = document.querySelector('.resetBtn').addEventListener("click",reset);
document.querySelector('h2').innerText = `Player 1's Turn`


//Turns
let turn = 1
//Player1 Turn 
let toggleX = (click) => {
  if (turn === 1){
      //blocks from allowing multiple selections on a tile
      if(click.target.classList.contains('o')){
          alert('Please choose another tile')
      }else{
          //allows player1 to choose tile and changes class to 'x' allowing img to display
          click.target.classList.add('x');
          //sets delay for showing next players turn
        //assigns tiles to player1 selections; to be compared to winning combinations
    player1State = tiles
                    .map((t, i) =>  t.classList.contains('x') ? i : 'skip')
                    .filter((e, i) => e !== 'skip')
         //check if you won! 
    if (!checkWin()){
          setTimeout(function(){document.querySelector('h2').innerText = `Player 2's Turn`},250)
            //switch counter to player 2 turn
          turn = 2
    }
  }
    
    
    //console.log(player1State)
    
   
  
  } else if (turn === 2){
      if(click.target.classList.contains('x')){
        alert('Please choose another tile')
  } else {
      click.target.classList.add('o')
        //assigns tiles to player1 selections; to be compared to winning combinations  
    player2State = tiles
                    .map((t, i) =>  t.classList.contains('o') ? i : 'skip')
                    .filter((e, i) => e !== 'skip')
    //console.log(player2State)

        //check if you won! 
    if (!checkWin()){      
        //sets delay for showing next players turn
      setTimeout(function(){document.querySelector('h2').innerText = `Player 1's Turn`},250)
        //switch counter to player 1 turn
      turn = 1
    }
  }
  }
}

//add event listener to all board tiles 
tiles.forEach(tile => tile.addEventListener('click', toggleX, {once : true}))


//reset function to clear the board
function reset () {
  playerState1 = []
  player2State = []
 
  turn = 1

  tiles.forEach(tile => {
    tile.classList.remove('x')
    tile.classList.remove('o')
  })

  document.querySelector('h2').innerText = `Player 1's Turn`
  tiles.forEach(tile => tile.addEventListener('click', toggleX, {once : true}))
}

//check win function to compare player state array with winning combinations
function checkWin() {
  const p1 = winCons.some(combo => {
    return combo.every(e => player1State.includes(e))
  })
  const p2 = winCons.some(combo => {
    return combo.every(e => player2State.includes(e))
  })

  if(p1){
    // alert('Player 1 wins!')
    document.querySelector('h2').innerText = `Player 1 Wins`
    //add event listener to all board tiles 
  tiles.forEach(tile => tile.removeEventListener('click', toggleX, {once : true}))
    return true
  } 
  if(p2) {
    // alert('Player 2 wins!')
    document.querySelector('h2').innerText = `Player 2 Wins`
    //add event listener to all board tiles 
  tiles.forEach(tile => tile.removeEventListener('click', toggleX, {once : true}))
    return true
  }
  if (player1State.length + player2State.length == 9){
    document.querySelector('h2').innerText = "Draw!"
    return true
  }
  return false
}






// //Turns
// let turn = 1
// //Player1 Turn 
// let toggleX = (click) => {
//     if(click.target.classList.contains('o')){
//         alert('Please choose another tile')
//     }else{
//         click.target.classList.add('x')
//     }
  
//   player1State = tiles
//                   .map((t, i) =>  t.classList.contains('x') ? i : 'skip')
//                   .filter((e, i) => e !== 'skip')
//   console.log(player1State)
//   //check if you won! 
  
//   //switch counter to player 2 turn

//   turn = 2
//   document.querySelector('h2').innerText = `Player ${turn}'s Turn`  
// }

// //Player2 Turn
// let toggleO = (click) => {
//   if(click.target.classList.contains('x')){
//         alert('Please choose another tile')
//     }else{
//         click.target.classList.add('o')
//     }

//     //check if you won! 

//   turn = 1
//   document.querySelector('h2').innerText = `Player ${turn}'s Turn`
// }

// //add event listener to all board tiles 
// tiles.forEach(tile => tile.addEventListener('click', toggleX))



//NOTES!!!!
//filter function that filters for class of 'x'= identify the return as the [] for player1state
//possible player1state as object? with values or method as property?
//start with 2 player --- add computer function later if wanna push

//2 player game:
//playerOne - X
//playerTwo - O

//eventlisteners onclick for player1 -done
//eventlisteners onclick for player2 -done
//they need to be in turns...so once X goes then 0's turn - done
//shows on html who's turn it is - done
  //based on counter value, conditional statement to pick the function for the correct turn -done
  //i.e. counter = 1 (player 1 turn(toggleX)), counter = 2 (player 2 turn(toggleO)) - done

//update tile on html (img) - done

//turns - not done
  //accepts turn and adds to player1 state
  //accepts turn and adds to player2 state
  //compares player1 state to winning combinations
  //comapers player2 state to winning combinations

//wins: - not done
  //forEach to compare the winCons against player1 or player2's state
    //conditional = if it matches a winning combination then it's a win  
    //if not, continues to next player
    //if all tiles filled and no winning combination, it's a draw
    //return if there is a winner or not (use boolean?)
  //render to HTML if Player1 wins, Player2 wins or Draw

//reset board - done'ish
  //will need a reset button
  //connect with javascript function to clear board and render empty board in html format

//push goals:
  //HTML
    //input text areas for player names
    //connect values with player1 and player2 in javascript
    //render player names instead of player1 and player2 when rending the win outcome

  //CSS
    //make pretty with background/design? borders?
    //format text/header
    //placement of winner results, player turn notification, etc

  //JavaScript
    //make object oriented (use class/constructors and all of the good stuff)
    //make code DRY
    //add computer opponent
      //possibly add option for two player game or one player vs computer
      //AI vs computer random selection vs preferred choice arrays?
      //delay showing player turns so human players can process the information and changes (2 second delay) - done
      //Random selection of who goes first (player 1, player 2 or computer)
        //if randomly selected, will need to update HTML to display who goes first; currently only shows Player1
      //set up Draw for when no winning combinations can be reached instead of just tiles being filled

  /* ReadMe Documentation
    Welcome to the #100 Devs Tic-Tac-Toe challenge! As part of the #100Devs program, we were challenged to work in a virtual group to develop a tic-tac-toe game. Our group used Replit for asynchronous work and met via Discord Voice channels for synchronous work flow periods.

    Our Tic-Tac-Toe game started as a two-player game and each developer was able to complete their our push goals to personalize the game. It is developed using HTML5, CSS, and JavaScript. 

    Base Game:
      -Utilizes HTML to render game interaction and results from JavaScript
      -2 player game with 8 winning combinations
      -Players will take turns starting with Player 1 until a winning combination occurs or all tiles are filled resulting in a draw.
      -Has reset game; resets upon click (can use in middle of game or at end)
      --Renders winner to HTML

    Push Goals Completed:
      -Delay showing next players turn

      ---*EACH DEVELOPER CAN UPDATE FOR THEIR OWN README WITH ANY GOALS THEY COMPLETE*---

    Additional Push Goals and Dreams:

      ---*EACH DEVELOPER CAN UPDATE WITH THEIR DREAMS FOR THE APP*---

    *YOU CAN COPY ALL OF THE NOTES HERE TO SHOW WORK PROCESS/PSEUDOCODE AS WELL*
      





    
  */



