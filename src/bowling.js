'use strict';

class Bowling {
  constructor() {
    this.frame = 1
    this.scorecard = []
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

  _scoreCalculator(x){
    let sum = 0
    this.scorecard.forEach(element => sum += this._frameScore(element))
    for (let i = 0; i < this.scorecard.length - x; i++){
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

  _totalScore(){
    if(this.frame !== 2 && this._isStrike(this.scorecard[this.frame - 3]) && this._isStrike(this.scorecard[this.frame - 2])){
      return this._scoreCalculator(3)
    } else if(this._isStrike(this.scorecard[this.frame - 2])){
      console.log("why dis no working")
      return this._scoreCalculator(2)
    } else if(this._isSpare(this.scorecard[this.frame - 2])){
      console.log("why dis no working")
      return this._scoreCalculator(2)
    } else {
      return this._scoreCalculator(0)
    }
  }

  _isEndGame(){
    if(this.frame > 10 && this._frameScore(this.scorecard[this.frame - 2]) < 10){
      return true
    } else if(this.frame > 10 && this._frameScore(this.scorecard[this.frame - 2]) > 10) {
      return true
    } else if(this.scorecard.length === 11 && this._isSpare(this.scorecard[this.frame - 2])){
      return true
    }
  }

  _reset(){
    this.scorecard = []
    this.frame = 1
  }
}
