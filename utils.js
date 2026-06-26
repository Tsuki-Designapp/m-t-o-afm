// Fonction pour convertir le weathercode en description lisible
export function getWeatherDescription(code) {
	const weatherCodes = {
		0: "Ciel dégagé",
		1: "Principalement dégagé",
		2: "Partiellement nuageux",
		3: "Nuageux",
		45: "Brouillard",
		48: "Brouillard givrant",
		51: "Bruine légère",
		53: "Bruine modérée",
		55: "Bruine dense",
		56: "Bruine verglaçante légère",
		57: "Bruine verglaçante dense",
		61: "Pluie légère",
		63: "Pluie modérée",
		65: "Pluie forte",
		66: "Pluie verglaçante légère",
		67: "Pluie verglaçante forte",
		71: "Chute de neige légère",
		73: "Chute de neige modérée",
		75: "Chute de neige forte",
		77: "Grêle",
		80: "Averses légères",
		81: "Averses modérées",
		82: "Averses violentes",
		85: "Averses de neige légères",
		86: "Averses de neige violentes",
		95: "Orage",
		96: "Orage avec grêle légère",
		99: "Orage avec grêle forte",
	};
	return weatherCodes[code] || "Inconnu";
}

//convertir la date en format lisible
export function formaterDate(dateSr) {
	const date = new Date(dateSr).toLocaleDateString("fr-FR", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	return date;
}

//convertir la vitesse du vent en format lisible
export function formaterVent(vitesse) {
	return `Vent ${vitesse} km/h`;
}
