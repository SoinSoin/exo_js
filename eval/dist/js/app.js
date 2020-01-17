window.onload = init;
var divResult;
var divTexte;

function init() {
	divResult = document.getElementsByTagName('div')[1];
	divTexte = document.getElementsByTagName('div')[2];
	for (var k in Animaux) {
		divResult.innerHTML += "<img id='" + Animaux[k].name + "' src='dist/images/" + Animaux[k].file + "'/>";
	}

	/**
	 * Ecrire ici la suite du programme principal
	 */

	var listImg = document.querySelectorAll("div:nth-child(2) img");

	clickHideImg(listImg);

	document.querySelector("div:nth-child(1) button:first-child").addEventListener('click', function () {
		allDomesticHide(listImg);
	}, false)

	document.querySelector("div:nth-child(1) button:last-child").addEventListener('click', function () {
		showAllImg(listImg);
	}, false)

}

/**
 * Ecrire ici vos méthodes 
 * 
 */

function clickHideImg(p_list_img) {
	p_list_img.forEach(function (ElImg) {
		ElImg.addEventListener('click', function () {
			this.style.display = 'none';
		}, false)
	})
}

function allDomesticHide(p_list_img) {
	p_list_img.forEach(function (ElImg) {
		if (isDomestic(ElImg.id)) ElImg.style.display = "none";
	})
}

function isDomestic(p_anim_name) {
	var isOk = false;
	Animaux.forEach(function (elAnim) {
		if (elAnim.name.trim() === p_anim_name.trim()) {
			if (elAnim.domestic) {
				isOk = true;
			}
		}
	})
	return isOk;
}

function showAllImg(p_list_img) {
	p_list_img.forEach(function (ElImg) {
		ElImg.style.display = "";
	})
}