'use strict';

//selecting elements

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = Document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classlist.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // ganerating a random dice rool
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceEL.classlist.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  // check for rolled 1

  //add dice to current score

  // switch to next player
});
