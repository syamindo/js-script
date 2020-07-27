// 1. Ambil elemen Button dengan class number

const numbers = document.querySelectorAll(".number")

// 2. Memberikan eventListener pada tiap-tiap number

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

// 3. Mengupdate nilai di layar berdasarkan masukan dari fungsi updateLayar

const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen = (number) => {
  calculatorScreen.value = number
}

// 4. Menyimpan angka untuk melakukan kalkulasi

let prevNumber = ''
let currentNumber = '0'
let calculationOperator = ''

// 5. Definisi fungsi input number

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

// 6. Ambil elemen Button dengan class operator

const operators = document.querySelectorAll('.operator')

// 7. Memberikan event-listener pada tiap-tiap operator

operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value)
  })
})

// 8. Definisi fungsi input operator
// - Memindahkan nilai pada currNumb ke prevNumb
// - Menjadikan operator sebagai argumen pada oprCalc
// - Mengosongkan nilai pada currNumb

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = ""
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
})

const calculate = () => {
  let result = ""
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break;
    case "-":
      result = prevNumber - currentNumber
      break;
    case "*":
      result = prevNumber * currentNumber
      break;
    case "/":
      result = prevNumber / currentNumber
      break;
    default:
      return
  }
  currentNumber = result
  calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
})

const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}

const desimal = document.querySelector('.decimal')
desimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})

inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

const percentage = document.querySelector('.percentage')
percentage.addEventListener('click', () => {
  inputPercentage()
  updateScreen(currentNumber + ' %')
})

inputPercentage = () => {
  currentNumber *= 100
}
