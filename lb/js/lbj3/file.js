 function calculate(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Ділення на нуль неможливе";
      } else {
        return num1 / num2;
      }
    default:      
      return "Некоректна операція";
  }
}

let firstNumber;
let secondNumber;
let operation;
do {
  firstNumber = parseFloat(prompt("Уведіть перше число:"));
  secondNumber = parseFloat(prompt("Уведіть друге число:"));
  operation = prompt("Уведіть операцію (+, -, *, /):");
  if (isNaN(firstNumber) || isNaN(secondNumber)) { 
    alert("Ви увели неправильні числа.спробуйте знову");
  }
} while (isNaN(firstNumber) || isNaN(secondNumber));

const result = calculate(firstNumber, secondNumber, operation);
console.log("Результат:", result);