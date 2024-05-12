'use strict';

const nums = document.querySelector('#nums'),
	  lowerCase = document.querySelector('#lower-case'),
	  upperCase = document.querySelector('#upper-case'),
	  symbols = document.querySelector('#symbols'),
	  lengthPass = document.querySelector('#length'),
	  generateBtn = document.querySelector('#generate'),
	  pass = document.querySelector('#pass');


// Checking checkboxes

const all = []

	nums.addEventListener('click', () => {
		if (nums.checked == true) {
			const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			// return numbersArr
		} else {
			console.log('false');
		}
	})

	
	lowerCase.addEventListener('click', () => {
		if (lowerCase.checked == true) {
			const lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
			return lowerArr
		} else {
			
		}
	})

	
	upperCase.addEventListener('click', () => {
		if (upperCase.checked == true) {
			const upperArr = [
				'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
				return upperArr
		} else {
			console.log('false');
		}
	})
	
	symbols.addEventListener('click', () => {
		if (symbols.checked == true) {
			const symbolsArr = [
				'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?'
			]
			return symbolsArr
		} else {
			console.log('false');
		}
	})


// -------------------------------------------------

const numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
	  upperArr = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
	  symbolsArr = [
		'!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?'
	];


	function randomNum() {
		// const numbersGen = numbersArr[Math.floor(Math.random(1) * 10)]
		// const lowerGen = lowerArr[Math.floor(Math.random(1) * 26)]
		// const upperGen = upperArr[Math.floor(Math.random(1) * 26)]
		// const symbolsGen = symbolsArr[Math.floor(Math.random(1) * 30)]
		const dataArr = [nums.checked ? numbersArr : false, 
			  lowerCase.checked ? lowerArr : false, 
			  upperCase.checked ? upperArr : false,
			  symbols.checked ? symbolsArr : false];


			const randomFirst = dataArr[(Math.floor(Math.random() * dataArr.length))]
			let randomSecond = randomFirst[(Math.floor(Math.random() * 1))]
			pass.innerHTML = 'Generated password: ' + dataArr.length
			console.log(dataArr);

			if (randomSecond == undefined) {
				pass.innerHTML = 'Error: select at least one option'
			}
	}



	// pass.innerHTML = 'Generated password: ' + randomNum()

generateBtn.addEventListener('click', () => {
	randomNum()
})