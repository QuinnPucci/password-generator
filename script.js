var form = document.getElementById('form')
var rangeEl = document.getElementById('characterRange')
var upperEl = document.getElementById('upper')
var numberEl = document.getElementById('number')
var symbolEl = document.getElementById('symbol')

var LOWERCASE_CHAR_CODE = arrayFromLowToHigh(97,122)
var UPPERCASE_CHAR_CODE = arrayFromLowToHigh(65,90)
var NUMBER_CHAR_CODE = arrayFromLowToHigh(48,57)
var SYMBOL_CHAR_CODE = arrayFromLowToHigh(33,47)
var passwordDisplay = document.getElementById('password')


form.addEventListener('submit', e=> {
  e.preventDefault
  var range = rangeEl.value
  var upper = upperEl.checked
  var number = numberEl.checked
  var symbol = symbolEl.checked
  generatePassword()
  var password = generatePassword(range, upper, symbol, number);
  passwordDisplay.innerText = password
})

function generatePassword(range, upper, symbol, number) {
 let charCodes = LOWERCASE_CHAR_CODE 
 if (upper) charCodes = charCodes.concat(UPPERCASE_CHAR_CODE)
 if (number) charCodes = charCodes.concat(NUMBER_CHAR_CODE)
 if (symbol) charCodes = charCodes.concat(SYMBOL_CHAR_CODE)

 var passwordCharacters = []
 for  (let i=0; i < rangeEl; i++) {
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

