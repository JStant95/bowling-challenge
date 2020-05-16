'use strict';

class Bowling {
  constructor() {
    this.frame = 1
    this.scorecard = []
    this.totalScore = 0
  }

  bowl(score){
   if(this.scorecard[this.frame - 1] === undefined){
     if(this.scorecard.length > 0 && this._frameScore(this.scorecard[this.frame - 2]) === 10){
       this.scorecard.push([score])
       this.scorecard[this.frame - 2].push(score)
     } else {
       this.scorecard.push([score])
     }
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

  _totalScore(){
    let sum = 0
    this.scorecard.forEach(element => sum += this._frameScore(element))
    this.totalScore = sum
  }
}
