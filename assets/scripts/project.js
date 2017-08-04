'use strict'
const messages = $('.messages');
const table = $('table');
const createBoard = function () {
  $(function () {
    let player = 1;
    const table = $('table');
    console.log(messages)
    const turn = $('.turn')
    console.log(messages)
    showNextPlayer(turn, player)

    $('td').click(function () {
      const td = $(this)
      console.log(messages);
      const state = getState(td)
      console.log(messages);
      if (!state) {
        let pattern = setShapeForEachPlayer(player)
        console.log(pattern)
        changeState(td, pattern);
        if (checkIfPlayerWon(table, pattern)) {
          messages.html('Player ' + player + ' has won.');
          turn.html('');
        } else {
          player = setNextPlayer(player);
          showNextPlayer(turn, player);
        }
      } else {
        messages.html('This box is already checked.');
      }
    });

    $('reset').click(function () {
      player = 1
      messages.html('');
      reset(table);
      showNextPlayer(turn, player)
    })
  })

  function getState (td) {
    if (td.hasClass('cross') || td.hasClass('circle')) {
      return 1
    } else {
      return 0;
    }
  }

  function changeState (td, pattern) {
    if (pattern === 'cross') {
      td.html('X')
    } else {
      td.html('O')
    }
    return td.addClass(pattern)
  }

  function setShapeForEachPlayer (player) {
    if (player === 1) {
      return 'cross';
    } else {
      return 'circle';
    }
  }

  function setNextPlayer (player) {
    if(player == 1) {
      return player = 2;
    } else {
      return player = 1;
    }
  }

  function showNextPlayer (turn, player) {
    messages.html('Player turn : ' + player)
  }
}
function checkIfPlayerWon (table, pattern) {
  let won = 0;
  if (table.find('.box1').hasClass(pattern) && table.find('.box2').hasClass(pattern) && table.find('.box3').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.box1').hasClass(pattern) && table.find('.box4').hasClass(pattern) && table.find('.box7').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.box1').hasClass(pattern) && table.find('.box5').hasClass(pattern) && table.find('.box9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.box4').hasClass(pattern) && table.find('.box5').hasClass(pattern) && table.find('.box6').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.box7').hasClass(pattern) && table.find('.box8').hasClass(pattern) && table.find('.box9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.box2').hasClass(pattern) && table.find('.box5').hasClass(pattern) && table.find('.box8').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.box3').hasClass(pattern) && table.find('.box6').hasClass(pattern) && table.find('.box9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.box3').hasClass(pattern) && table.find('.box5').hasClass(pattern) && table.find('.box7').hasClass(pattern)) {
    won = 1;
  }
  return won
}

// function getResetState (td) {
//  if (td.hasClass('cross') || td.hasClass('circle')) {
//    td.hasClass = null;
//  }
// }

$(function newGame () {
  $('#reset').on('click', function (event) {
    createBoard()
    $('.square').html('')
  })
})
/*
function reset (table) {
  table.find('td').each(function () {
    $(this).removeClass('circle').removeClass('cross')
  });
}
*/
