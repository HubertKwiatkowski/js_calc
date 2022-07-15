const buttons = document.querySelectorAll('.button')
const numbers = [0,1,2,3,4,5,6,7,8,9,'.']
const actions = ['(', ')', '*', '-', '+', '^', 'root', 'div', '%']
const textArea = document.querySelector('#text-area')
let coma = false
let makeAction = false
let number
let operation = ''
let addPart = ''

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let btn = button.innerHTML
    writeNumber(btn)
    // action(btn)
  })
});


function writeNumber(btn) {
  numbers.forEach(number => {
    if (number == btn) {
      if (makeAction == true) {
        textArea.innerHTML = '0'
        makeAction = false
      }
      if (textArea.innerHTML == 0) {
        textArea.innerHTML = btn
      } else if (btn=='.' && coma==false) {
        textArea.innerHTML += btn
        coma = true
      } else if (btn!='.') {
        textArea.innerHTML += btn
      }
    }
  })
}


// function action(btn) {
//   actions.forEach(action => {
//     if ((action == btn) && (makeAction == false)) {
//       console.log(action)
//       makeAction = true
//       addPart = textArea.innerHTML + action
//     } else if (action == '=') {
//       addPart = textArea.innerHTML
//     }
//     if (operation=='') {
//       operation = addPart
//     } else {
//       operation += addPart
//     }
//     console.log(operation)
//   })
// }