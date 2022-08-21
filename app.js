let displayPassword = document.querySelector('.display-password')
let displayPassword2 = document.querySelector('#display-password')

const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
]

function generatePassword() {
  let num
  for (let i = 0; i < characters.length; i++) {
    // let result1 = characters.splice(3)

    num = characters[Math.floor(Math.random() * characters.length)]

    displayPassword.textContent += num
    displayPassword.textContent = displayPassword.textContent.slice(0, 15)
  }

  for (let i = 0; i < characters.length; i++) {
    // let result1 = characters.splice(3)

    num = characters[Math.floor(Math.random() * characters.length)]

    displayPassword2.textContent += num
    displayPassword2.textContent = displayPassword2.textContent.slice(0, 15)
  }
}
