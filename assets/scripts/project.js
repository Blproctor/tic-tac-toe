'use strict'
// const createBoard = function () {
// $(function () {
//  showNextPlayer(turn, player);
const messages = $('.messages')
const table = $('table')
const turn = $('.turn')
const td1 = $('#box1')
const td2 = $('#box2')
const td3 = $('#box3')
const td4 = $('#box4')
const td5 = $('#box5')
const td6 = $('#box6')
const td7 = $('#box7')
const td8 = $('#box8')
const td9 = $('#box9')
// const td = [td1, td2, td3, td4, td5, td6, td7, td8, td9]
// for (let i = 0; i < 9; i++) {
// const content = getPattern(td)
let player = 1
let content = false
let won = false

$('#box1').click(function () {
  onClickBox(td1)
})

$('#box2').click(function () {
  onClickBox(td2)
})

$('#box3').click(function () {
  onClickBox(td3)
})

$('#box4').click(function () {
  onClickBox(td4)
})

$('#box5').click(function () {
  onClickBox(td5)
})

$('#box6').click(function () {
  onClickBox(td6)
})

$('#box7').click(function () {
  onClickBox(td7)
})

$('#box8').click(function () {
  onClickBox(td8)
})

$('#box9').click(function () {
  onClickBox(td9)
})
// upon clicking the reset button, the player is set to 1, the messages box is emptied,
// the table is reset, and the first player turn will display in the messages box
$('#reset').click(function (content) {
  content = false
  player = 1
  messages.html('')
  td1.empty()
  td2.empty()
  td3.empty()
  td4.empty()
  td5.empty()
  td6.empty()
  td7.empty()
  td8.empty()
  td9.empty()
  if (td1.hasClass('cross') || td1.hasClass('circle')) {
    td1.removeClass('cross')
    td1.removeClass('circle')
  }
  if (td2.hasClass('cross') || td2.hasClass('circle')) {
    td2.removeClass('cross')
    td2.removeClass('circle')
  }
  if (td3.hasClass('cross') || td3.hasClass('circle')) {
    td3.removeClass('cross')
    td3.removeClass('circle')
  }
  if (td4.hasClass('cross') || td4.hasClass('circle')) {
    td4.removeClass('cross')
    td4.removeClass('circle')
  }
  if (td5.hasClass('cross') || td5.hasClass('circle')) {
    td5.removeClass('cross')
    td5.removeClass('circle')
  }
  if (td6.hasClass('cross') || td6.hasClass('circle')) {
    td6.removeClass('cross')
    td6.removeClass('circle')
  }
  if (td7.hasClass('cross') || td7.hasClass('circle')) {
    td7.removeClass('cross')
    td7.removeClass('circle')
  }
  if (td8.hasClass('cross') || td8.hasClass('circle')) {
    td8.removeClass('cross')
    td8.removeClass('circle')
  }
  if (td9.hasClass('cross') || td9.hasClass('circle')) {
    td9.removeClass('cross')
    td9.removeClass('circle')
  }
  showNextPlayer(turn, player)
  // for (let i = 0; i < 9; i++) {
  //  if (td[i].hasClass('cross') || td[i].hasClass('circle')) {
  //  td[i].removeClass('cross')
  //  td[i].removeClass('circle')
  //  }
//  }
})

function onClickBox (td, content) {
  // sets 'content' equal to the function 'getPattern' defined below
  content = getPattern(td)
  let pattern
  // if there is no content in the boxes
  if (!content) {
    // TODO api call to patch the update to the game

    // sets the constant 'pattern' equal to the function 'setPatternForEachPlayer' defined below
    pattern = setPatternForEachPlayer(player)
    // changePattern function defined below handles the changing of 'X' and 'O' for each player
    changePattern(td, pattern)
    // checkWhoWon function defined below contains the game win logic
  } if (checkWhoWon(table, pattern, won, player)) {
    winMessage(table, pattern, won, player)
    td1.off()
    td2.off()
    td3.off()
    td4.off()
    td5.off()
    td6.off()
    td7.off()
    td8.off()
    td9.off()
    // resets the messages box after a player has won
    // messages.html('')
  } else if ((!won) && (table.find('#box1').hasClass('cross') || table.find('#box1').hasClass('circle')) &&
    (table.find('#box2').hasClass('cross') || table.find('#box2').hasClass('circle')) &&
    (table.find('#box3').hasClass('cross') || table.find('#box3').hasClass('circle')) &&
    (table.find('#box4').hasClass('cross') || table.find('#box4').hasClass('circle')) &&
    (table.find('#box5').hasClass('cross') || table.find('#box5').hasClass('circle')) &&
    (table.find('#box6').hasClass('cross') || table.find('#box6').hasClass('circle')) &&
    (table.find('#box7').hasClass('cross') || table.find('#box7').hasClass('circle')) &&
    (table.find('#box8').hasClass('cross') || table.find('#box8').hasClass('circle')) &&
    (table.find('#box9').hasClass('cross') || table.find('#box9').hasClass('circle'))) {
    checkForDraw()
  } else {
    //  spaceTaken()
    // sets 'player' equal to the function 'setNextPlayer' defined below which changes the player turn
    player = setNextPlayer(player)
    // will display whose turn it is in the messages box
    showNextPlayer(turn, player)
    // clears the messages box
  }
}

function getPattern (td) {
  if (td.hasClass('cross') || td.hasClass('circle')) {
    return true
  } else {
    return false
  }
}

function changePattern (td, pattern) {
  if (pattern === 'cross') {
    td.html('X')
  } else {
    td.html('O')
  }
  return td.addClass(pattern)
}

function setPatternForEachPlayer (player) {
  if (player === 1) {
    return 'cross'
  } else {
    return 'circle'
  }
};

function setNextPlayer (player) {
  if (player === 1) {
    return 2
  } else {
    return 1
  }
};

// function spaceTaken () {
//   if (getPattern()) {
//     messages.html('Nice try! Do not be sneaky!')
//   } else {
//     return false
//   }
// }

function showNextPlayer (turn, player) {
  messages.html('Player turn : ' + player)
}

function winMessage () {
  messages.html('Player ' + player + ' has won!!!')
}

function checkForDraw () {
  messages.html('This is a tie game!')
}

// function clearBoxesAfterWin (td, table) {
//   if (winMessage()) {
//     return (table.find('#box1').hasClass('') && table.find('#box2').hasClass('') &&
//     table.find('#box3').hasClass('') && table.find('#box4').hasClass('') &&
//     table.find('#box5').hasClass('') && table.find('#box6').hasClass('') &&
//     table.find('#box7').hasClass('') && table.find('#box8').hasClass('') &&
//     table.find('#box9').hasClass(''))
//   }
// }
// table.find('#box1').hasClass('') && table.find('#box2').hasClass('') &&
// table.find('#box3').hasClass('') && table.find('#box4').hasClass('') &&
// table.find('#box5').hasClass('') && table.find('#box6').hasClass('') &&
// table.find('#box7').hasClass('') && table.find('#box8').hasClass('') &&
// table.find('#box9').hasClass('')

// if ((!won) && (pattern === 'cross' || 'circle') && table.find('#box1').hasClass(pattern) && table.find('#box2').hasClass(pattern) &&
// table.find('#box3').hasClass(pattern) && table.find('#box4').hasClass(pattern) &&
// table.find('#box5').hasClass(pattern) && table.find('#box6').hasClass(pattern) &&
// table.find('#box7').hasClass(pattern) && table.find('#box8').hasClass(pattern) &&
// table.find('#box9').hasClass(pattern)) {
//   messages.html('It is a tie game!')
// }

function checkWhoWon (table, pattern, won, player) {
  if ((pattern === 'cross' || 'circle') && table.find('#box1').hasClass(pattern) && table.find('#box2').hasClass(pattern) && table.find('#box3').hasClass(pattern)) {
    won = true
  } else if ((pattern === 'cross' || 'circle') && table.find('#box1').hasClass(pattern) && table.find('#box4').hasClass(pattern) && table.find('#box7').hasClass(pattern)) {
    won = true
  } else if ((pattern === 'cross' || 'circle') && table.find('#box1').hasClass(pattern) && table.find('#box5').hasClass(pattern) && table.find('#box9').hasClass(pattern)) {
    won = true
  } else if ((pattern === 'cross' || 'circle') && table.find('#box4').hasClass(pattern) && table.find('#box5').hasClass(pattern) && table.find('#box6').hasClass(pattern)) {
    won = true
  } else if ((pattern === 'cross' || 'circle') && table.find('#box7').hasClass(pattern) && table.find('#box8').hasClass(pattern) && table.find('#box9').hasClass(pattern)) {
    won = true
  } else if ((pattern === 'cross' || 'circle') && table.find('#box2').hasClass(pattern) && table.find('#box5').hasClass(pattern) && table.find('#box8').hasClass(pattern)) {
    won = true
  } else if ((pattern === 'cross' || 'circle') && table.find('#box3').hasClass(pattern) && table.find('#box6').hasClass(pattern) && table.find('#box9').hasClass(pattern)) {
    won = true
  } else if ((pattern === 'cross' || 'circle') && table.find('#box3').hasClass(pattern) && table.find('#box5').hasClass(pattern) && table.find('#box7').hasClass(pattern)) {
    won = true
  }
  return won
};

// function reset (table) {
//  table.find('#td').each(function (pattern) {
//    td.removeClass('circle').removeClass('cross')
//  })
// }
// function getResetContent (td) {
//  if (td.hasClass('cross') || td.hasClass('circle')) {
//    return td.hasClass('')
//  }
// }
//  }
// }
// $(function newGame () {
//  $('#reset').on('click', function (event) {
//    createBoard()
//    $('.square').html('')
//  })
// })

/* function resetContent (td, pattern) {
  if (pattern === 'cross' || pattern === 'circle') {
    td.html(' ')
  } else {
    td.html(' ');
  }
  return td.removeClass(pattern);
}
*/
