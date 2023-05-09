const boxs = document.querySelector(".boxs");
const success = document.querySelector(".success");
const error = document.querySelector(".error");
const warning = document.querySelector(".warning");
const info = document.querySelector(".info");

let counter = 0;


success.addEventListener("click", () => {
	let objList = {
		iconOne: "fa-solid fa-circle-check",
		colorEl: "color-green",
		bgEl: "bg-green",
		textOne: "a success",
	};
	mainFunc(objList);
});



error.addEventListener("click", () => {
	let objList = {
		iconOne: "fa-solid fa-circle-xmark",
		colorEl: "color-red",
		bgEl: "bg-red",
		textOne: "an error",
	};
	mainFunc(objList);
});



warning.addEventListener("click", () => {
	let objList = {
		iconOne: "fa-solid fa-triangle-exclamation",
		colorEl: "color-yellow",
		bgEl: "bg-yellow",
		textOne: "a warning",
	};
	mainFunc(objList);

});



info.addEventListener("click", () => {
	let objList = {
		iconOne: "fa-solid fa-circle-info",
		colorEl: "color-blue",
		bgEl: "bg-blue",
		textOne: "an information",
	};
	mainFunc(objList);

});



function mainFunc(test) {
	let catcher = counter++;
	let divvv = document.createElement("div");
	divvv.className = 'card';
	divvv.setAttribute("data-count", `${catcher}`);
	divvv.innerHTML = `
		<i class="${test.iconOne} ${test.colorEl}"></i>
		<p class="para">success: <span>this is ${test.textOne} toast.</span></p>
		<i class="fa-solid fa-xmark" onclick="exitFunction(this)"></i>
		<div class="sudo-elem ${test.bgEl}"></div>
  `;

	boxs.appendChild(divvv);
	const pusod = document.querySelector(`.card[data-count="${catcher}"] .sudo-elem`);

	setTimeout(() => {
		pusod.classList.add('active')
		divvv.classList.add("active");
	}, 100);

	setTimeout(() => remoElem(divvv), 4000);
}



function remoElem(e) {
	e.classList.remove("active");
	setTimeout(() => {
		e.remove();
	}, 500);
}



function exitFunction(e) {
	e.parentElement.classList.remove("active");
	setTimeout(() => {
		e.parentElement.remove();
	}, 500);
}