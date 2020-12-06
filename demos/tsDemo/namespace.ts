namespace Validation {
  export interface StringValidator {
    isAcceptable(s:string):boolean;
  }
  const letterRegexp = /^[A-Za-z]+$/
  const numberRegexp = /^[0-9]+$/

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s:string){
      return letterRegexp.test(s)
    }
  }
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s:string){
      return s.length === 5 && numberRegexp.test(s)
    }
  }
}

let strings = ['hello', '89099', '89']

let validators:{[s:string]: Validation.StringValidator}={}
validators['zip code'] = new Validation.ZipCodeValidator()
validators['letters only'] = new Validation.LettersOnlyValidator()

for(let s of strings) {
  for (let name in validators) {
    console.log(`'${s}'-${validators[name].isAcceptable(s) ? 'matches' : 'does not match'} ${name}`)
  }
}