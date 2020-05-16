'use strict';

class Bowling {
  constructor() {
    this.frame = 1
    this.scorecard = []
    this.totalScore = 0
  }

  bowl(score){
    if(score === 10){
      this.scorecard.push([score])
      this._nextFrame();
    } else if(this.scorecard[this.frame - 1] === undefined){
        this.scorecard.push([score])
    } else {
      this.scorecard[this.frame - 1].push(score)
      this._nextFrame();
    }
  }

  _nextFrame(){
    this.frame += 1
  }

  _frameScore(frame){
    const add = (a,b) => a + b
    return frame.reduce(add)
  }

  _isStrike(frame){
    return frame.length === 1 && this._frameScore(frame) === 10
  }

  _isSpare(frame){
    return frame.length === 2 && this._frameScore(frame) === 10
  }

  _totalScore(){
    let sum = 0
    this.scorecard.forEach(element => sum += this._frameScore(element))
    for (let i = 0; i < this.scorecard.length; i++){
      if(i === 9){
        break;
      }
      if(this._isStrike(this.scorecard[i])){
        if(this._isStrike(this.scorecard[i + 1])){
          sum += 10 + this.scorecard[i + 2][0]
        } else {
          sum += this._frameScore(this.scorecard[i + 1])
        }
      }
      if(this._isSpare(this.scorecard[i])){
        sum += this.scorecard[i + 1][0]
      }
    }
    return sum
  }
}
