let daylyEl = document.querySelectorAll("#daily");
let weeklyEl = document.querySelectorAll("#weekly");
let monthlyEl = document.querySelectorAll("#monthly");

let daily = () => {
	for (let i = 0; i < daylyEl.length; i++) {
		daylyEl[i].style.display = "flex";
		weeklyEl[i].style.display = "none";
		monthlyEl[i].style.display = "none";
	}
}

let weekly = () => {	
	for (let i = 0; i < daylyEl.length; i++) {
		daylyEl[i].style.display = "none";
		weeklyEl[i].style.display = "flex";
		monthlyEl[i].style.display = "none";
	}
}

let monthly = () => {
	for (let i = 0; i < daylyEl.length; i++) {
		daylyEl[i].style.display = "none";
		weeklyEl[i].style.display = "none";
		monthlyEl[i].style.display = "flex";
	}
}