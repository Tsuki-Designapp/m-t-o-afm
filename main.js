import { fetchMeteoData } from "./api.js";

//ecouter le click sur le bouton
const bouton = document.querySelector("#btnMaVille");
bouton.addEventListener("click", (e) => {
	e.preventDefault();
	const ville = document.querySelector("#maVille").value.trim();
	if (!ville) {
		console.log("Veuillez entrer une ville.");
		return;
	}

	//apelle api meteo
	fetchMeteoData(ville);
});
