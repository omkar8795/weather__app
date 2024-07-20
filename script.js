var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
// apiKey ="352ffb374ce187ce54ca53ecc214a6dc"
apiKey ="9b45798d2723e2c089c5143fd42c8e1d"

function convertor(val)
{
    return (val - 273).toFixed(3)
}
console.log(inputvalue)

btn.addEventListener('click', function()
{

    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=${apiKey}&units=metric`)
    .then(resp=>resp.json())

    .then(data =>
        {
            console.log(data)
            // var nameval = data['name']
            // var descrip = data['weather']['description']
            // var temperture = data['main']['temp']
            // var windspeed = data['wind']['speed']
            var nameval=data.name
            var descrip=data.weather[0].description
            var temperature=data.main.temp
            var windspeed=data.wind.speed
            // console.log(namval)

            city.innerHTML = `weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${temperature} c</span>`
            description.innerHTML = `sky condition: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${windspeed} km/h<span>`
        })
        

    // fetch( `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=${apiKey}&units=metric`)
    // .then(resp=>resp.json()).then(val=>console.log(val))
})