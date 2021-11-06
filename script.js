var form = document.getElementById('form')
var rangeEl = document.getElementById('characterRange')
var lowerEl = document.getElementById ('lower')
var upperEl = document.getElementById('upper')
var numberEl = document.getElementById('number')
var symbolEl = document.getElementById('symbol')

var LOWERCASE_CHAR_CODE = arrayFromLowToHigh(97,122)
var UPPERCASE_CHAR_CODE = arrayFromLowToHigh(65,90)
var NUMBER_CHAR_CODE = arrayFromLowToHigh(48,57)
var SYMBOL_CHAR_CODE = arrayFromLowToHigh(33,47)
var passwordDisplay = document.getElementById('password')


form.addEventListener('submit', event=> {
  event.preventDefault()
  console.log("in form")
  var range = rangeEl.value
  var lower = lowerEl.checked
  var upper = upperEl.checked
  var number = numberEl.checked
  var symbol = symbolEl.checked
  var password = generatePassword(range, lower, upper, symbol, number);
  passwordDisplay.innerText = password
})

function generatePassword(range, lower, upper, symbol, number) {
 if (lower === false && upper === false && symbol === false && number === false) {
   alert("You must pick one or more of the character options")
   return 
 }
let charCodes = [] ; 
var passwordCharacters = []
if (lower) { 
  charCodes = charCodes.concat(LOWERCASE_CHAR_CODE)
passwordCharacters.push(String.fromCharCode(LOWERCASE_CHAR_CODE[Math.floor(Math.random()* LOWERCASE_CHAR_CODE.length)]))
}
if (upper) { 
  charCodes = charCodes.concat(UPPERCASE_CHAR_CODE)
passwordCharacters.push(String.fromCharCode(UPPERCASE_CHAR_CODE[Math.floor(Math.random()* UPPERCASE_CHAR_CODE.length)]))
}
if (number) { 
  charCodes = charCodes.concat(NUMBER_CHAR_CODE)
passwordCharacters.push(String.fromCharCode(NUMBER_CHAR_CODE[Math.floor(Math.random()* NUMBER_CHAR_CODE.length)]))
}
if (symbol) { 
  charCodes = charCodes.concat(SYMBOL_CHAR_CODE)
passwordCharacters.push(String.fromCharCode(SYMBOL_CHAR_CODE[Math.floor(Math.random()* SYMBOL_CHAR_CODE.length)]))
}

 for  (let i=passwordCharacters.length; i < range; i++) {
   var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
 passwordCharacters.push(String.fromCharCode(characterCode))
 }
 return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i) 
  }
  return array
}

