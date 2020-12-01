// 函数
function add (x:number, y:number):number{
  return x+y
}

let myAd = function(x:number, y:number):number{return x+y}

let myAdd:(x:number, y:number) => number = function(x:number, y:number):number{return x+y}

console.log(myAdd(3, 4))

let myAddd:(baseValue: number, increment: number) => number = function(x,y){return x+y}

function buildName(firstName:string,lastName='smith'){
  console.log(`firstName is ${firstName}, lastName is ${lastName}`)
}

buildName('a')
buildName('a', 'b')
buildName('a', undefined)

function bName(firstName:string,...restName:string[]){
  return `${firstName} ${restName.join(' ')}`
}

const bn = bName('a', 'b', 'd', 'm')
console.log(bn)

let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker:function(){
    return function(){
      const pickedCard = Math.floor(Math.random()*52)
      const pickedSuit = Math.floor(pickedCard / 13)
      return {suit: this.suits[pickedSuit], card: pickedCard % 13}
    }
  }
}

const cardPicker = deck.createCardPicker()
console.log(cardPicker)
const pickedCard = cardPicker.call(deck)
console.log(pickedCard.suit, pickedCard.card)

interface Card {
  suit: string;
  card: number;
}

interface Deck{
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck):()=>void
}

let dc: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return {suit: this.suits[pickedSuit], card: pickedCard % 13}
    }
  }
}

let cp = deck.createCardPicker()
let pc = cp.call(dc)
console.log(pc)

interface UIElement {
  addClickListener(onclick:(this: void, e: Event) => void): void
}

class Handler {
  info: string;
  onClickBad(this: Handler, e: Event) {
    // this.info = e.message
  }
}

let h = new Handler()

