/* const letHover = false

$(document).ready(function () {
  const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]]

  let choice = 'You will be <br>'
    choice += "<input type='radio' name='choice' value='x'> X"
    choice += '<br>'
    choice += "<input type='radio' name='choice' value='o'> O"
    choice += '<br>'
    choice += "<button id='ok'>Ok</button>"
  const currentGame = new Game()
  const playerX = new Player()
  const playerO = new Player()
}

('.play button').on('click', function () {
    currentGame.clearGame()
    $('#alert span').html(choice)
    $('#alert').show()
  })

(".item").hover(function () {
    var count = $(this).index(".item");
    if (letHover) {
      if (currentGame.cells[count])
      return;
      $(this).text(currentGame.currentStep);
    }
  },
    function() {
    var count = $(this).index(".item");
    if (letHover) {
    if (currentGame.cells[count])
    return;
    $(this).text("");
    }
    }
  )

(".item").on("click", function() {
  var count = $(this).index(".item");
    if (letHover && !currentGame.cells[count]) {
      letHover = false;
      currentGame.fixStep(count);
      }
    })

("#alert").on("click", "button", function() {
  var x, o;
    if ($(this).attr("id") === "ok") {
      x = $("input[name='choice'][value='x']").is(":checked");
      o = $("input[name='choice'][value='o']").is(":checked");
      if (x) {
        playerX.user = true;
        playerO.user = false;
      } else if (o) {
        playerX.user = false;
        playerO.user = true;
      } else {
        return;
      }

  function Player() {
  this.steps = [],
    this.user,
    this.addStep = function(step) {
    this.steps.push(step);
    },
    this.checkStep = function() {
    var result;
      for (var i = 0; i < 8; i++) {
      result = true;
        for (var j = 0; j < 3; j++) {
        if (this.steps.indexOf(wins[i][j]) < 0) {
          result = false;
          break;
          }
        }
        if (result) return true;
      }return false;
    }
  } */
