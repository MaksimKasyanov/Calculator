const dotDisable = document.querySelector(".calculator__dot"); // Кнопка с точкой
const equalBtn = document.querySelector(".calculator__equal").addEventListener("click", equal); // Кнопка равно
const cleanBtn = document.querySelector(".calculator__clean").addEventListener("click", clean); // Кнопка очистить
const percentBtn = document.querySelector(".calculator__percent").addEventListener("click", percent); // Кнопка очистить
const deleteBtn = document.querySelector(".calculator__percent").addEventListener("click", deleteChar); // Кнопка удалить
const numbers = document.querySelectorAll(".calculator__buttons .calculator__number"); // Кнопки с символами
const operators = document.querySelectorAll(".calculator__buttons .calculator__operator"); // Кнопки с операторами
const iteration = document.querySelector(".calculator__screen-iteration"); // Поле вывода последних данных
const output = document.querySelector(".calculator__screen-output"); // Поле вывода результата

let arr = [""];
let mainArr = [];
let string = "";
let resultStr = "";

function numberClick(){
	for(let i = 0; i < numbers.length; i++){
		numbers[i].addEventListener('click', numberAction);
	}
	for(let i = 0; i < operators.length; i++){
		operators[i].addEventListener('click', operatorAction);
	}
}
numberClick();
function numberAction(){
	arr[arr.length - 1] += this.textContent; // Добавить значение в массив
	string = arr.join(''); //Скопировать из массива в строку
	if(arr[arr.length - 1].includes('.') == true){ // Заблокировать точку если уже поставлена
		dotDisable.setAttribute("disabled", '');
	}else{
		dotDisable.removeAttribute("disabled", '');
	}
	output.innerHTML = string; // ! Запись данных
}

function operatorAction(){
	arr = []; //Очистить массив
	arr.push(string); //Записать строку в массив
	arr.push(this.textContent); // Добавить значение
	string = arr.join('');
	output.innerHTML = string; // ! Запись данных
}



function equal() {
	iteration.innerHTML = string;
	resultStr = eval(string);
	output.innerHTML = resultStr; // ! Запись данных
	string = resultStr;
	console.log(resultStr);
}
function percent() {
	iteration.innerHTML = `${string} / 100`; // ! Запись данных
	resultStr = eval(string / 100);
	output.innerHTML = resultStr; // ! Запись данных
	string = resultStr;
	console.log(resultStr);
}

function clean() {
	arr = [""];
	mainArr = [];
	string = "";
	resultStr = "";
	iteration.innerHTML = '';
	output.innerHTML = '0';
}

function deleteChar(){
	output.innerHTML = string.substring(0, str.length - 1);
}