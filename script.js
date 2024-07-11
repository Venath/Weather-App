const apiKey="5c9bd8809fd3ec2b739e610c148aed92";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchButton=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weatherIcon")

console.log("object")

async function checkWeather(city){

    const res=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data= await res.json();
    console.log(data)

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/";
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp);
    document.querySelector(".humidity").innerHTML=data.main.humidity+" %";

if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png"
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png"
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png"
}
else if(data.weather[0].main=="Snow"){
    weatherIcon.src="images/snow.png"
}


}


searchButton.addEventListener("click", ()=>{
    const city=searchBox.value
    console.log(city)
    checkWeather(city)
})

checkWeather("New York"); //default newyork


