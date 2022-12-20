// SETTING INTIAL VALUE OF COUNT TO ZERO

let count = 0;

// SELECTING VALUE AND BUTTONS

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
	btn.addEventListener('click', (e) =>{
		const clickButton = e.currentTarget.classList;

		if(clickButton.contains("increase")) {
			count++;
		} else if(clickButton.contains("decrease")) {
			count--;
		} else {
			count = 0;
		}

		value.textContent = count;
	})
})