let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function
let num1=parseFloat(input1);
let num2=parseFloat(input2);

function isValidNumber(value){
	return !isNaN(value) && value!=="";
}

if(isValidNumber(num1) && isValidNumber(num2)){
	let sum=num1+num2;
	alert(`The sum of ${num1} and ${num2} is ${sum}.`);
}else{
	alert("Invalid input. Please enter a valid number.");
}