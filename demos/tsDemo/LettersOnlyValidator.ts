/// <reference path="Validation.ts" />
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/
  export class LetterOnlyValidator implements StringValidator {
    isAcceptable(s:string){
      return lettersRegexp.test(s)
    }
  }
}
