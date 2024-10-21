const displayInput = document.querySelector('.input')
const displayOutput = document.querySelector('.output')
const btns = document.querySelectorAll('.key')

const operators = ['+', '-', '*', '/', '.']

let currentInput = ''

btns.forEach(btn => btn.addEventListener('click', handleCalculation))

function handleCalculation(e) {
  const btnValue = e.target.innerText

  if (operators.includes(btnValue) && operators.includes(currentInput.slice(-1)))
    return

  switch (btnValue) {
    case 'AC':
      currentInput = ''
      displayInput.innerText = ''
      displayOutput.innerText = ''
      break
    case '=':
      try {
        displayOutput.innerText = eval(currentInput)
      } catch {
        displayOutput.innerText = 'Error'
      }
      break
    case '←':
      if (currentInput) {
        currentInput = currentInput.slice(0, -1)
        displayInput.innerText = currentInput
      }
      break
    default:
      currentInput += btnValue
      displayInput.innerText = currentInput
  }
}
