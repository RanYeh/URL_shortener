const Record = require('./models/record')

// define sample function to randomly return an item in an array 
function sample(array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

// define isTwin function to check duplicate shortUrl in db
function isTwin(shortUrl) {
  Record.findOne({ shortUrl: shortUrl })
    .then(data => {
      if (data) {
        return true
      }else{
        return false
      }
    })
    .catch(error => console.error(error))
}

// define genGarbledChars function
function genGarbledChars(n) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let charList = [...(lowerCaseLetters + upperCaseLetters + numbers)]
  let grabledChars = ''

  for (let i = 0; i < n; i++) {
    grabledChars += sample(charList)
  }

  if (isTwin(grabledChars)) {
    grabledChars = ''
    for (let i = 0; i < n; i++) {
      grabledChars += sample(charList)
    }
    return grabledChars
  } else {
    return grabledChars
  }
}

// export genGarbledChars
module.exports = genGarbledChars