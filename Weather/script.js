const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'da68f6e42dmsh2da46ea008f3774p11c670jsn5190c044348c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	 cityName.innerHTML  = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) => {
		
		
		
		console.log(response)
		



// CO.innerHTML =  response.CO
// NO2.innerHTML = response.NO2
// O3.innerHTML = response.O3
// SO2.innerHTML = response.SO2
// PM2.5.innerHTML = response.PM2.5
// PM10.innerHTML = response.PM10
// overall_aqi.innerHTML = response.Overall_aqi

wind_speed.innerHTML = response.wind_speed 
wind_speed2.innerHTML = response.wind_speed 
wind_degrees.innerHTML = response.wind_degrees
temp.innerHTML = response.temp
temp2.innerHTML = response.temp
humidity.innerHTML = response.humidity
humidity2.innerHTML = response.humidity
sunset.innerHTML = response.sunset 
min_temp.innerHTML= response.min_temp
// cloud_pct.innerHTML = response.cloud_pct 
feels_like.innerHTML = response.feels_like
sunrise.innerHTML = response.sunrise
max_temp.innerHTML = response.max_temp

	
	
 	
		})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)

})
getWeather("Odisha")