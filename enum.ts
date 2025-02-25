enum WeatherConditions {
    Sunny = 'sunny',
    Cloudy = 'cloudy',
    Rainy = 'rainy',
    Snowy = 'snowy'
};

console.log(WeatherConditions)
console.log(WeatherConditions.Rainy)

const currentWeather = WeatherConditions.Sunny;
console.log(`The Current Weather is ${currentWeather}`)