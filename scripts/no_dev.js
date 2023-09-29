// Can't inspect element, contextmenu
document.addEventListener("contextmenu", (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
	return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
// document.onkeydown = (e) => {
// 	if (
// 		event.keyCode === 123 ||
// 		ctrlShiftKey(e, "I") ||
// 		ctrlShiftKey(e, "J") ||
// 		ctrlShiftKey(e, "C") ||
// 		(e.ctrlKey && e.keyCode === "U".charCodeAt(0))
// 	) {
// 		return false;
// 	}
// };

// Pause and play audio on click of the Avatar image (my smol easter egg)
// var myAudio = document.getElementById("my-audio");
// function togglePlay() {
// 	if (myAudio.paused) {
// 		myAudio.play();
// 	} else {
// 		myAudio.pause();
// 	}
// }
