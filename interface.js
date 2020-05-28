$(document).ready(function() {
  var bowl = new Bowling();
    $("#new-game").hide();

  function updateScore(){
    $('#score').text(bowl._totalScore());
  }

  function updateScorecard(){
    $('#scorecard').text(bowl.scorecard);
  }

  function checkEnd(){
    if(bowl._isEndGame()){
      $("#new-game").show();
    }
  }

  $('#new-game').on('click', function(){
    bowl._reset();
    $("#new-game").hide();
    $('#score').text(0);
  })

  $('#bowl0').on('click', function(){
    bowl.bowl(0);
    updateScore();
    updateScorecard()
    checkEnd();
  })

  $('#bowl1').on('click', function(){
    bowl.bowl(1);
    updateScore();
    updateScorecard()
    checkEnd();
  })

  $('#bowl2').on('click', function(){
    bowl.bowl(2);
    updateScore();
    updateScorecard()
    checkEnd();
  })

  $('#bowl3').on('click', function(){
    bowl.bowl(3);
    updateScore();
    updateScorecard()
    checkEnd();
  })

  $('#bowl4').on('click', function(){
    bowl.bowl(4);
    updateScore();
    updateScorecard()
    checkEnd();
  })

  $('#bowl5').on('click', function(){
    bowl.bowl(5);
    updateScore();
    updateScorecard()
    checkEnd();
  })

  $('#bowl6').on('click', function(){
    bowl.bowl(6);
    updateScore();
    updateScorecard()
    checkEnd();
  })

  $('#bowl7').on('click', function(){
    bowl.bowl(7);
    updateScore();
    updateScorecard()
    checkEnd();
  })

  $('#bowl8').on('click', function(){
    bowl.bowl(8);
    updateScore();
    updateScorecard()
    checkEnd();
  })

  $('#bowl9').on('click', function(){
    bowl.bowl(9);
    updateScore();
    updateScorecard()
    checkEnd();
  })

  $('#bowl10').on('click', function(){
    bowl.bowl(10);
    updateScore();
    updateScorecard()
    checkEnd();
  })

  $('#reset').on('click', function(){
    bowl._reset();
    $('#score').text(0);
    $('#scorecard').text("");
  })
})
