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

  function buttonHider(){
    if(bowl.scorecard[bowl.frame - 1] === undefined){
      $('#bowl10').show()
      $('#bowl9').show()
      $('#bowl8').show()
      $('#bowl7').show()
      $('#bowl6').show()
      $('#bowl5').show()
      $('#bowl4').show()
      $('#bowl3').show()
      $('#bowl2').show()
    } else if(bowl.scorecard[bowl.frame - 1][0] === 1){
      $('#bowl10').hide()
    } else if(bowl.scorecard[bowl.frame - 1][0] === 2){
      $('#bowl10').hide()
      $('#bowl9').hide()
    } else if(bowl.scorecard[bowl.frame - 1][0] === 3){
      $('#bowl10').hide()
      $('#bowl9').hide()
      $('#bowl8').hide()
    } else if(bowl.scorecard[bowl.frame - 1][0] === 4){
      $('#bowl10').hide()
      $('#bowl9').hide()
      $('#bowl8').hide()
      $('#bowl7').hide()
    } else if(bowl.scorecard[bowl.frame - 1][0] === 5){
      $('#bowl10').hide()
      $('#bowl9').hide()
      $('#bowl8').hide()
      $('#bowl7').hide()
      $('#bowl6').hide()
    } else if(bowl.scorecard[bowl.frame - 1][0] === 6){
      $('#bowl10').hide()
      $('#bowl9').hide()
      $('#bowl8').hide()
      $('#bowl7').hide()
      $('#bowl6').hide()
      $('#bowl5').hide()
    } else if(bowl.scorecard[bowl.frame - 1][0] === 7){
      $('#bowl10').hide()
      $('#bowl9').hide()
      $('#bowl8').hide()
      $('#bowl7').hide()
      $('#bowl6').hide()
      $('#bowl5').hide()
      $('#bowl4').hide()
    } else if(bowl.scorecard[bowl.frame - 1][0] === 8){
      $('#bowl10').hide()
      $('#bowl9').hide()
      $('#bowl8').hide()
      $('#bowl7').hide()
      $('#bowl6').hide()
      $('#bowl5').hide()
      $('#bowl4').hide()
      $('#bowl3').hide()
    } else if(bowl.scorecard[bowl.frame - 1][0] === 9){
      $('#bowl10').hide()
      $('#bowl9').hide()
      $('#bowl8').hide()
      $('#bowl7').hide()
      $('#bowl6').hide()
      $('#bowl5').hide()
      $('#bowl4').hide()
      $('#bowl3').hide()
      $('#bowl2').hide()
    }
  }


  $('#new-game').on('click', function(){
    bowl._reset();
    $("#new-game").hide();
    $('#score').text(0);
    buttonHider();
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
    buttonHider()
  })

  $('#bowl2').on('click', function(){
    bowl.bowl(2);
    updateScore();
    updateScorecard()
    checkEnd();
    buttonHider()
  })

  $('#bowl3').on('click', function(){
    bowl.bowl(3);
    updateScore();
    updateScorecard()
    checkEnd();
    buttonHider()
  })

  $('#bowl4').on('click', function(){
    bowl.bowl(4);
    updateScore();
    updateScorecard()
    checkEnd();
    buttonHider()
  })

  $('#bowl5').on('click', function(){
    bowl.bowl(5);
    updateScore();
    updateScorecard()
    checkEnd();
    buttonHider()
  })

  $('#bowl6').on('click', function(){
    bowl.bowl(6);
    updateScore();
    updateScorecard()
    checkEnd();
    buttonHider()
  })

  $('#bowl7').on('click', function(){
    bowl.bowl(7);
    updateScore();
    updateScorecard()
    checkEnd();
    buttonHider()
  })

  $('#bowl8').on('click', function(){
    bowl.bowl(8);
    updateScore();
    updateScorecard()
    checkEnd();
    buttonHider();
  })

  $('#bowl9').on('click', function(){
    bowl.bowl(9);
    updateScore();
    updateScorecard()
    checkEnd();
    buttonHider();
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
    buttonHider();
  })
})
