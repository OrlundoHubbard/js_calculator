const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

console.log(buttons)

function calculate() {
    console.log(buttons)

}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))