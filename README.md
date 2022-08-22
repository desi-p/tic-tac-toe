# tic-tac-toe

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



Below is an example of our work-flow

Group Notes!!!!
filter function that filters for class of 'x'= identify the return as the [] for player1state
possible player1state as object? with values or method as property?
start with 2 player --- add computer function later if wanna push

2 player game:
playerOne - X
playerTwo - O

eventlisteners onclick for player1 -done
eventlisteners onclick for player2 -done
they need to be in turns...so once X goes then 0's turn - done
shows on html who's turn it is - done
  based on counter value, conditional statement to pick the function for the correct turn -done
  i.e. counter = 1 (player 1 turn(toggleX)), counter = 2 (player 2 turn(toggleO)) - done

update tile on html (img) - done

turns - done
  accepts turn and adds to player1 state - done
  accepts turn and adds to player2 state - done
  compares player1 state to winning combinations - done
  comapers player2 state to winning combinations - done

wins: - done
  forEach to compare the winCons against player1 or player2's state - done
    conditional = if it matches a winning combination then it's a win  - done
    if not, continues to next player - done
    if all tiles filled and no winning combination, it's a draw - done
    return if there is a winner or not (use boolean?) - done
  render to HTML if Player1 wins, Player2 wins or Draw - done

reset board - done 
  will need a reset button - done
  connect with javascript function to clear board and render empty board in html format - done

push goals:
  HTML
    input text areas for player names
    connect values with player1 and player2 in javascript
    render player names instead of player1 and player2 when rending the win outcome

  CSS
    make pretty with background/design? borders?
    format text/header
    placement of winner results, player turn notification, etc

  JavaScript
    make object oriented (use class/constructors and all of the good stuff)
    make code DRY
    add computer opponent
      possibly add option for two player game or one player vs computer
      I vs computer random selection vs preferred choice arrays?
      delay showing player turns so human players can process the information and changes (2 second delay) - done
      Random selection of who goes first (player 1, player 2 or computer)
        if randomly selected, will need to update HTML to display who goes first; currently only shows Player1
      set up Draw for when no winning combinations can be reached instead of just tiles being filled