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
  console.log(content)
  player = 1
  messages.html('')
  console.log(messages)
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
  console.log(turn)
  console.log(player)
  console.log(content)
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
  console.log(content)
  let pattern
  // if there is no content in the boxes
  if (!content) {
    // TODO api call to patch the update to the game

    // sets the constant 'pattern' equal to the function 'setPatternForEachPlayer' defined below
    console.log(player)
    pattern = setPatternForEachPlayer(player)
    console.log(pattern)
    // changePattern function defined below handles the changing of 'X' and 'O' for each player
    changePattern(td, pattern)
    // checkWhoWon function defined below contains the game win logic
  } if (checkWhoWon(table, pattern, won, player)) {
    console.log(messages)
    messages.html('Player ' + player + ' is the winner.')
    console.log(messages)
    // resets the messages box after a player has won
    messages.html('')
  } else {
    // sets 'player' equal to the function 'setNextPlayer' defined below which changes the player turn
    player = setNextPlayer(player)
    // will display whose turn it is in the messages box
    showNextPlayer(turn, player)
    // clears the messages box
    messages.html('')
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

function showNextPlayer (turn, player) {
  messages.html('Player turn : ' + player)
}

function checkWhoWon (table, pattern, won, player) {
  if ((pattern === 'cross' || 'circle') && table.find('#box1').hasClass(pattern) && table.find('#box2').hasClass(pattern) && table.find('#box3').hasClass(pattern)) {
    won = true
    messages.html('Player ' + player + 'has won!!!')
  } else if ((pattern === 'cross' || 'circle') && table.find('#box1').hasClass(pattern) && table.find('#box4').hasClass(pattern) && table.find('#box7').hasClass(pattern)) {
    won = true
    messages.html('Player ' + player + 'has won!!!')
  } else if ((pattern === 'cross' || 'circle') && table.find('#box1').hasClass(pattern) && table.find('#box5').hasClass(pattern) && table.find('#box9').hasClass(pattern)) {
    won = true
    messages.html('Player ' + player + 'has won!!!')
  } else if ((pattern === 'cross' || 'circle') && table.find('#box4').hasClass(pattern) && table.find('#box5').hasClass(pattern) && table.find('#box6').hasClass(pattern)) {
    won = true
    messages.html('Player ' + player + 'has won!!!')
  } else if ((pattern === 'cross' || 'circle') && table.find('#box7').hasClass(pattern) && table.find('#box8').hasClass(pattern) && table.find('#box9').hasClass(pattern)) {
    won = true
    messages.html('Player ' + player + 'has won!!!')
  } else if ((pattern === 'cross' || 'circle') && table.find('#box2').hasClass(pattern) && table.find('#box5').hasClass(pattern) && table.find('#box8').hasClass(pattern)) {
    won = true
    messages.html('Player ' + player + 'has won!!!')
  } else if ((pattern === 'cross' || 'circle') && table.find('#box3').hasClass(pattern) && table.find('#box6').hasClass(pattern) && table.find('#box9').hasClass(pattern)) {
    won = true
    messages.html('Player ' + player + 'has won!!!')
  } else if ((pattern === 'cross' || 'circle') && table.find('#box3').hasClass(pattern) && table.find('#box5').hasClass(pattern) && table.find('#box7').hasClass(pattern)) {
    won = true
    messages.html('Player ' + player + 'has won!!!')
  }
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
