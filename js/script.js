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









