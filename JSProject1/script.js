document.addEventListener('DOMContentLoaded', async () => {
    const apiKey = '8271329a3271f370433486c0add0d31d'; 
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  
    
    const weatherData = document.querySelector('.weather-data');
  
    // Replace 'CityName' with the desired city name.
    const cityName = 'New York'; // Replace with the city name you want to see
  
    async function fetchWeatherData(cityName) {
      try {
        const response = await fetch(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
      }
    }
  
    const weather = await fetchWeatherData(cityName);
  
    if (weather) {
      weatherData.innerHTML = `
        <h2>${weather.name}, ${weather.sys.country}</h2>
        <p>Temperature: ${weather.main.temp}°C</p>
        <p>Weather: ${weather.weather[0].description}</p>
        <p>windSpeed: ${weather.wind.speed}</p>
      `;
    } else {
      weatherData.innerHTML = '<p>Unable to fetch weather data.</p>';
    }
  });
  