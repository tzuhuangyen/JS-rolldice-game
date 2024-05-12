# JS-rolldice-game (https://tzuhuangyen.github.io/JS-rolldice-game/)
The code provided is a JavaScript program for a dice game. Here is a summary of the code:
- The code starts with the initialization of various variables and elements used in the game.
- The  `init()`  function is responsible for setting the initial state of the game, including scores, current score, active player, and playing status.
- The  `switchPlayer()`  function is used to switch the active player and update the UI accordingly.
- The  `btnRoll`  event listener handles the functionality of rolling the dice. It generates a random number, displays the corresponding dice image, and updates the current score. If the rolled number is 1, the current score is reset and the active player is switched.
- The  `btnHold`  event listener handles the functionality of holding the current score. It adds the current score to the active player's total score, checks if the player has won, and either switches the player or ends the game.
- The  `btnNew`  event listener resets the game to its initial state when the "New Game" button is clicked.
 Overall, this code implements the logic and UI for a simple dice game where players take turns rolling a dice and accumulating scores. The first player to reach a score of 20 wins the game.
