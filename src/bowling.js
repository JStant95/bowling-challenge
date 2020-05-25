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
    return this._frameScore(frame) === 10 && frame.length === 1
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
     if(this.frame <= 2){
     }else if(this._isStrike(this.scorecard[i])){
        if(this._isStrike(this.scorecard[i + 1])){
          sum += 10 + this.scorecard[i + 2][0]
        } else {
          sum += this._frameScore(this.scorecard[i + 1])
        }
      }
      if(this._isSpare(this.scorecard[i]) && this.frame > 2){
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

  _reset(){
    this.scorecard = []
    this.frame = 1
  }

  _isEndGame(){
   if(this.frame === 13){
     return true
   }

   if(this.frame === 11 && this._frameScore(this.scorecard[9]) !== 10){
     return true
   }

   if(this.frame === 11 && this.scorecard[10] !== undefined && this.scorecard[10].length === 1){
     return true
   }
 }
}
