/* API KEY: 0917897f987e4beda1d130013250708 */
const apiKey = '0917897f987e4beda1d130013250708';
const search = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherCard = document.getElementById('weather-result');
const errorCard = document.getElementById('error-message');

async function getWeather(city){
    try{
        const cityName = city.toLowerCase().trim();
        const resp = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=pt`);
        if(!resp.ok){
            throw new Error(`Cidade não encontrada.`);
        }
        const data = await resp.json();
        weatherDataRenderizer(data);
    }
    catch(error){
        errorCard.classList.remove('hidden');
    }
}

function weatherDataRenderizer(cityData){
    waeResultCard = `
    <h2 id="city-name">${cityData.location.name}, ${cityData.location.country}</h2>
    <p id="local-time" class="local-time">Horário Local: ${cityData.location.localtime}</p>

    <div class="weather-main">
        <img id="weather-icon" src="${cityData.current.condition.icon}" alt="Ícone do tempo">
        <p id="temperature">${cityData.current.temp_c}°C</p>
    </div>
    <p id="condition">${cityData.current.condition.text}</p>

    <div class="weather-details">
        <div class="detail-item">
            <span>Sensação</span>
            <strong id="feels-like">${cityData.current.feelslike_c}°</strong>
        </div>
        <div class="detail-item">
            <span>Umidade</span>
            <strong id="humidity">${cityData.current.humidity}%</strong>
        </div>
        <div class="detail-item">
            <span>Vento</span>
            <strong id="wind-speed">${cityData.current.wind_kph} km/h</strong>
        </div>
        <div class="detail-item">
            <span>Pressão</span>
            <strong id="pressure">'${cityData.current.pressure_mb} mb</strong>
        </div>
        <div class="detail-item">
            <span>Visibilidade</span>
            <strong id="visibility">${cityData.current.vis_km} km'</strong>
        </div>
        <div class="detail-item">
            <span>Índice UV</span>
            <strong id="uv-index">${cityData.current.uv}</strong>
        </div>
    </div>
    `
    weatherCard.innerHTML = waeResultCard;
    weatherCard.classList.remove('hidden');
}

search.addEventListener('click', function(){
    const cityName = cityInput.value.trim();

    if(cityName){
        getWeather(cityName);
    }
})