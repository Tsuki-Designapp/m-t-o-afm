// URL de base pour l'API Open-Meteo (Paris)
const BASE_URL = "https://api.open-meteo.com/v1/forecast";

// Fonction pour récupérer les données météo
async function fetchMeteoData(latitude = 48.8566, longitude = 2.3522) {
  try {
    // Construction de l'URL avec les paramètres
    const params = new URLSearchParams({
      latitude: latitude,
      longitude: longitude,
      current: "temperature_2m,weathercode,windspeed_10m,relativehumidity_2m",
      daily: "temperature_2m_max,temperature_2m_min,weathercode",
      timezone: "Europe/Paris",
      forecast_days: 7
    });

    const url = `${BASE_URL}?${params.toString()}`;

    // Appel à l'API
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();

    // Traitement des données pour un format plus lisible
    const current = {
      temperature: data.current.temperature_2m,
      weathercode: data.current.weathercode,
      windspeed: data.current.windspeed_10m,
      humidity: data.current.relativehumidity_2m,
      // Ajout d'une description météo en français
      description: getWeatherDescription(data.current.weathercode)
    };

    const daily = data.daily.time.map((date, index) => ({
      date: date,
      tempMax: data.daily.temperature_2m_max[index],
      tempMin: data.daily.temperature_2m_min[index],
      weathercode: data.daily.weathercode[index],
      description: getWeatherDescription(data.daily.weathercode[index])
    }));

    return { current, daily };
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo :", error);
    return null;
  }
}
