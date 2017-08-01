'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// TODO define variables
// $(function() {
//  let player = 1;
//  let board = $('board');
//  let turn = $('.turn');
//  showNextPlayer(turn, player);

// TODO update function for setting player
// function setNextPlayer(player) {
//  if(player == 1) {
//    return player = 2;
//  } else {
//    return player = 1;
//  }
// }

// TODO modify reset click function with variables (function works) ...
//  $('.reset').click(function() {
//    player = 1;
//    messages.html('Reset');
//    reset(board);
//    showNextPlayer(turn, player);
//  }
