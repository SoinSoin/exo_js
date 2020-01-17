window.onload = init;
var divResult;
var divTexte;
function init(){
	divResult = document.getElementsByTagName('div')[1];
	divTexte = document.getElementsByTagName('div')[2];
	for(var k in Animaux){
		divResult.innerHTML += "<img id='"+Animaux[k].name+"' src='dist/images/"+Animaux[k].file+"'/>";
	}
	 
	/**
	 * Ecrire ici la suite du programme principal
	 */

	
}

/**
 * Ecrire ici vos méthodes 
 */

