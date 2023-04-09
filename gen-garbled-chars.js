// define sample function to randomly return an item in an array 
function sample(array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

// define genGarbledChars function
function genGarbledChars() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let charList = [...(lowerCaseLetters + upperCaseLetters + numbers)]
  let grabledChars = ''

  for (let i = 0; i < 5; i++) {
    grabledChars += sample(charList)
  }

  return grabledChars
}

// export genGarbledChars
module.exports = genGarbledChars