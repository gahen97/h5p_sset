function check() {
    var elem = document.getElementsByClassName("h5p-iframe")[0];
    if (!window.screenTop && !window.screenY) {
	elem.style.width = "100%";
    } else {
	elem.style.width = "80%";
    }
}

document.addEventListener('webkitfullscreenchange', check, false);
document.addEventListener('mozfullscreenchange', check, false);
document.addEventListener('fullscreenchange', check, false);
