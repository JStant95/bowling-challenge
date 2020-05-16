'use strict';

describe ('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts at the 1st frame', function(){
    expect(bowling.frame).toEqual(1);
  });

  it('allows user to input each bowl', function(){
    bowling.bowl(5);
    bowling.bowl(3);
    console.log(bowling.scorecard)
    expect(bowling.scorecard).toEqual([[5, 3]])
  });

  it('auto tracks which frame a user on', function(){
    bowling.bowl(5);
    bowling.bowl(3);
    bowling.bowl(6);
    expect(bowling.frame).toEqual(2)
  });

  it('tracks scores per frame', function(){
    bowling.bowl(5)
    bowling.bowl(3)
    bowling.bowl(4)
    bowling.bowl(3)
    expect(bowling.scorecard).toEqual([[5, 3],[4, 3]])
  })

  it('Scoring takes spares into accout', function(){
    bowling.bowl(5)
    bowling.bowl(5)
    bowling.bowl(4)
    bowling.bowl(3)
    expect(bowling._totalScore()).toEqual(21)
  })

  it('Scoring takes strikes into accout', function(){
    bowling.bowl(10)
    bowling.bowl(4)
    bowling.bowl(3)
    expect(bowling._totalScore()).toEqual(24)
  })
});
