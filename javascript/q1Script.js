function waitForChange() {
	setTimeout(changeZIndex, 7000);
}

function changeZIndex() {
	let pot = document.getElementById("pot");
	let bread = document.getElementById("bread");

	pot.style.zIndex = "999";
	bread.style.zIndex = "999";
}