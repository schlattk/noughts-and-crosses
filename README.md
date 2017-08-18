## Tic Tac Toe Tech Test ##

## Overview ##

The rules of tic-tac-toe are as follows:

    There are two players in the game (X and O)
    Players take turns until the game is over
    A player can claim a field if it is not already taken
    A turn ends when a player claims a field
    A player wins if they claim all the fields in a row, column or diagonal
    A game is over if a player wins
    A game is over when all fields are taken

User Stories

As a player I want to see what fields are available

As a player I want to choose a box on the board that has not been taken

As a player I want to play against another player

As a player I want to know when I have won or lost

## Instructions ##

you can play in the console. Access Game.html in the browser and play as follows:

Game.board(); resets the board and can be used to restart the game.

Inputs are made by giving two arguments either nought or cross along a grid
with row info first (0,1 or 2)
and then column (0,1,2)

double entries and entries outside the grid log "invalid entry", awaiting a valid entry.
if a player wins, a winner message is displayed in the console.

## Technology ##

Javascript module pattern
Jasmine for testing 15 specs: 0 failures

## Console instructions and output ##

 Game.nought(1,1)
 -   Array [ " ", "", " " ]  print.js:4:5
 -   Array [ "", "O", "" ]  print.js:5:5
 -   Array [ " ", "", " " ]  print.js:6:5
 Game.cross(0,2)
 -   Array [ " ", "", "X" ]  print.js:4:5
 -   Array [ "", "O", "" ]  print.js:5:5
 -   Array [ " ", "", " " ]  print.js:6:5
 Game.nought(1,2)
 -   Array [ " ", "", "X" ]  print.js:4:5
 -   Array [ "", "O", "O" ]  print.js:5:5
 -   Array [ " ", "", " " ]  print.js:6:5
 Game.cross(1,2)
 -   invalid entry  validation.js:6:9
 -   Array [ " ", "", "X" ]  print.js:4:5
 -   Array [ "", "O", "O" ]  print.js:5:5
 -   Array [ " ", "", " " ]  print.js:6:5
 Game.cross(1,3)
 -   invalid entry  validation.js:6:9
 -   Array [ " ", "", "X" ]  print.js:4:5
 -   Array [ "", "O", "O" ]  print.js:5:5
 -   Array [ " ", "", " " ]  print.js:6:5
 Game.cross(0,1)
 -   Array [ " ", "X", "X" ]  print.js:4:5
 -   Array [ "", "O", "O" ]  print.js:5:5
 -   Array [ " ", "", " " ]  print.js:6:5
 Game.nought(1,0)
 -  Array [ " ", "X", "X" ]  print.js:4:5
 -   Array [ "O", "O", "O" ]  print.js:5:5
 -   Array [ " ", "", " " ]  print.js:6:5
 -   O has won the game !  print.js:9:5
     
