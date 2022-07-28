let button = document.getElementById('btn')
btn.onclick = function(){
  let formvalue = document.getElementById('formfield').value
  console.log(formvalue)

  let key = "f36c33e2900351ee784ea7300737fdca";

let api = `https://api.openweathermap.org/data/2.5/weather?q=${formvalue}&appid=${key}`;

fetch(api)
  .then((response)=> response.json())
  .then((data)=>{
    console.log(data)
     let city = document.getElementById('city-name')
     city.innerHTML = data.name
     let countryName = document.getElementById('country')
     countryName.innerHTML = data.sys.country
     let temp = document.getElementById('temperature')
     temp.innerHTML = data.main.temp
     let feels_like = document.getElementById('mood')
     feels_like.innerHTML = data.main.feels_like
     let humidity = document.getElementById('hum')
     humidity.innerHTML = data.main.humidity

     let speed = document.getElementById('wind')
     speed.innerHTML = data.wind.speed

     let temp_max = document.getElementById('max-temp')
     temp_max.innerHTML = data.main.temp_max

     
     
})
.catch((error)=>console.log(error))
}
