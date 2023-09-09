document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://restcountries.com/v3/all';
    const countryInfoContainer = document.querySelector('.country-info');
  
    async function fetchCountryData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching country data:', error);
        return null;
      }
    }
  
    function updateCountryInfo(countryData) {
      if (countryData) {
        const randomIndex = Math.floor(Math.random() * countryData.length);
        const randomCountry = countryData[randomIndex];
  
        const countryName = randomCountry.name.common;
        const capital = randomCountry.capital[0];
        const population = randomCountry.population.toLocaleString();
        const region = randomCountry.region;
        const currency = Object.keys(randomCountry.currencies)[0];
  
        countryInfoContainer.innerHTML = `
          <h2>${countryName}</h2>
          <p>Capital: ${capital}</p>
          <p>Population: ${population}</p>
          <p>Region: ${region}</p>
          <p>Currency: ${currency}</p>
        `;
      } else {
        countryInfoContainer.innerHTML = '<p>Error fetching country data.</p>';
      }
    }
  
    // Fetch country data on page load
    fetchCountryData()
      .then((data) => updateCountryInfo(data));
  });
  