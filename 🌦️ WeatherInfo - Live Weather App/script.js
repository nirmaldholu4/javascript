function getWeather(city) {

    const WEATHER_API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`;

    fetch(WEATHER_API).then((res) => {
        res.json().then((data) => {
            document.querySelector('h1').innerText = data.location.name;
            document.querySelector('h2').innerText = data.current.temp_c + "°";
            document.querySelector('h3').innerText = data.location.localtime;

            document.querySelector('span').innerText = data.current.condition.text;
            document.querySelector('img').src = "https:" + data.current.condition.icon;

            document.getElementById('cloud').innerText = data.current.cloud + "%";
            document.getElementById('humidity').innerText = data.current.humidity + "%";
            document.getElementById('wind').innerText = data.current.wind_kph + "km/h";

            let cond = data.current.condition.text.toLowerCase();
            let bgBox = document.getElementById('bg-box');

            if (cond.includes('rain')) {
                bgBox.style.backgroundImage = "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1000')";
            } else if (cond.includes('cloud') || cond.includes('overcast')) {
                bgBox.style.backgroundImage = "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1000')";
            } else if (cond.includes('clear') || cond.includes('sun')) {
                bgBox.style.backgroundImage = "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000')";
            } else {
                bgBox.style.backgroundImage = "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1000')";
            }
        });
    });
}

document.querySelector('button').onclick = function () {
    let city = document.querySelector('input').value;
    getWeather(city);
};

let cityItems = document.querySelectorAll('.cities li');
cityItems.forEach(item => {
    item.onclick = function () {
        getWeather(this.innerText);
    }
});

getWeather("bhuj");

document.querySelector('button').onclick = function () {
    let city = document.querySelector('input').value;

    const WEATHER_API = `https://api.weatherapi.com/v1/current.json?key=e26ee2f87b994c98863100552231608&q=${city}`;

    fetch(WEATHER_API).then((res) => {
        res.json().then((data) => {
            document.querySelector('h1').innerText = data.location.name;
            document.querySelector('h2').innerText = data.current.temp_c + "°";
            document.querySelector('h3').innerText = data.location.localtime;

            document.querySelector('span').innerText = data.current.condition.text;
            document.querySelector('img').attributes.src.value = "https:" + data.current.condition.icon;

        });
    });
}