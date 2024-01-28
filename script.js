// Задача 1
let students1 = [
	{ name: "Alice", score: 75 },
	{ name: "Bob", score: 92 },
	{ name: "Charlie", score: 88 },
	{ name: "David", score: 65 },
	{ name: "Eve", score: 98 },
];

const newArr = students1.map((el, i) => {
	return el.name
})
console.log(newArr);
//  Задача 2.
let students = [
	{ name: "Alice", score: 75 },
	{ name: "Bob", score: 92 },
	{ name: "Charlie", score: 88 },
	{ name: "David", score: 65 },
	{ name: "Eve", score: 98 },
];

const answer = students.filter((el) => el.score >= '80');
console.log(answer);

//  Задача 3.

let students2 = [
	{ name: "Alice", score: 75 },
	{ name: "Bob", score: 92 },
	{ name: "Charlie", score: 88 },
	{ name: "David", score: 65 },
	{ name: "Eve", score: 98 },
];

const answer = students2.forEach((el) => {
	if(el){
		console.log(students);
	}
});
console.log(answer);

let students3 = [
	{ name: "Alice", score: 75 },
	{ name: "Bob", score: 92 },
	{ name: "Charlie", score: 88 },
	{ name: "David", score: 65 },
	{ name: "Eve", score: 98 },
];

const answer1 = students3.find((el) => el.name === 'Alice');
console.log(answer1);

//  Задача 4.

let students4 = [
	{ name: "Alice", score: 75 },
	{ name: "Bob", score: 92 },
	{ name: "Charlie", score: 88 },
	{ name: "David", score: 65 },
	{ name: "Eve", score: 98 },
];

let totalScore = students4.reduce((accumulator, student) => accumulator + student.score, 0);

let averageScore = totalScore / students.length;

console.log("Средний балл студентов: " + averageScore);

//  Задача 5.

const currentDate = {
  specificDate: new Date(),
}
console.log(currentDate.specificDate);

const start = new Date(23-11-2023);
const index = new Date();



// Задача 6

function randomDateInRange(startDate, endDate) {
  let startMillis = startDate.getTime();
  let endMillis = endDate.getTime();

  let randomMillis = Math.random() * (endMillis - startMillis) + startMillis;
  let randomDate = new Date(randomMillis);

  return randomDate;
}

let startDate = new Date("2023-01-01");
let endDate = new Date("2023-12-31");

let randomDate = randomDateInRange(startDate, endDate);
console.log(randomDate);

// Задача 7

function randomIntegerInRange(min, max) {
  let randomNum = Math.random() * (max - min) + min;

  let randomInt = Math.floor(randomNum);

  return randomInt;
}

let minNumber = 5;
let maxNumber = 15;

let randomInt = randomIntegerInRange(minNumber, maxNumber);
console.log(randomInt);

// Задача 8

function maxMinFromArray(numbers) {
	if (!Array.isArray(numbers) || numbers.length === 0) {
		return { max: undefined, min: undefined };
	}
	let max = Math.max(...numbers);
	let min = Math.min(...numbers);
	return { max, min };
}

let numbersArray = [5, 2, 9, 1, 7];
let result = maxMinFromArray(numbersArray);

console.log(result);

/////////////////////////////////////

function maxMinArr(num) {
	if (!Array.isArray(num) || num.length === 0) {
		return { max: undefined, min: undefined };
	}
	let max = Math.max(...num);
	let min = Math.min(...num);
	return { max, min };
}

let numbersNum = [5, 2, 9, 1, 7];
let result1 = maxMinArr(numbersNum);

console.log(result1);

function maxArr(numbers) {
	if (!Array.isArray(num) || num.length === 0) {
		return { max: undefined, min: undefined };
	}
	let max = Math.max(...num);
	let min = Math.min(...num);
  return { max, min };
}

let numbersNum1 = [5, 2, 9, 1, 7];
let result2 = maxMinArr(numbersNum1);

console.log(result2);