function check() {
    var elem = document.getElementsByClassName("h5p-iframe")[0];
	   elem.style.width = "100%";
}

document.addEventListener('webkitfullscreenchange', check, false);
document.addEventListener('mozfullscreenchange', check, false);
document.addEventListener('fullscreenchange', check, false);
