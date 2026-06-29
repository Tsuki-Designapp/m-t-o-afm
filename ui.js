export function afficherMeteoActuelle(data) {
	document.getElementById("meteo-actuelle").innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Température : ${data.current.temp_c} °C</p>
        <p>Ressenti : ${data.current.feelslike_c} °C</p>
        <p>Condition : ${data.current.condition.text}</p>
        <p>Humidité : ${data.current.humidity} %</p>
        <p>Vent : ${data.current.wind_kph} km/h</p>
    `;
}

export function afficherPrevisions(data) {
	document.getElementById("cartes-prevision").innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Température : ${data.current.temp_c} °C</p>
        <p>Ressenti : ${data.current.feelslike_c} °C</p>
        <p>Condition : ${data.current.condition.text}</p>
        <p>Humidité : ${data.current.humidity} %</p>
        <p>Vent : ${data.current.wind_kph} km/h</p>
    `;
}
