$(document).ready(function() {
  var bowl = new Bowling();

  function updateScore(){
    $('#score').text(bowl._totalScore());
  }

  if(!bowl._isEndGame()){
    $("#new-game").hide();
  }

  $('#bowl0').on('click', function(){
    bowl.bowl(0);
    updateScore();
  })

  $('#bowl1').on('click', function(){
    bowl.bowl(1);
    updateScore();
  })

  $('#bowl2').on('click', function(){
    bowl.bowl(2);
    updateScore();
  })

  $('#bowl3').on('click', function(){
    bowl.bowl(3);
    updateScore();
  })

  $('#bowl4').on('click', function(){
    bowl.bowl(4);
    updateScore();
  })

  $('#bowl5').on('click', function(){
    bowl.bowl(5);
    updateScore();
  })

  $('#bowl6').on('click', function(){
    bowl.bowl(6);
    updateScore();
  })

  $('#bowl7').on('click', function(){
    bowl.bowl(7);
    updateScore();
  })

  $('#bowl8').on('click', function(){
    bowl.bowl(8);
    updateScore();
  })

  $('#bowl9').on('click', function(){
    bowl.bowl(9);
    updateScore();
  })

  $('#bowl10').on('click', function(){
    bowl.bowl(10);
    updateScore();
  })

  $('#reset').on('click', function(){
    bowl._reset();
    $('#score').text(0);
  })

  $('#new-game').on('click', function(){
    bowl._reset();
    $('#score').text(0);
  })
})
