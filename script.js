async function searchweather(){
    const city=document.getElementById("cityInput").value.trim();
    const apiKey = "fdd927a7442aabc623d687a286eebe3d";
    const weatherinfo=document.getElementById("weatherInfo");
    if(city==="")
        {
           alert("please enter a city name");
           return;
        }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;   

    try{
        const response=await fetch(apiURL);
        if(!response.ok){
            throw new Error("city not found");
        }
        const data= await response.json();

        document.getElementById("temp").textContent = `${data.main.temp}°C`;
        document.getElementById("desc").textContent = data.weather[0].description;
        document.getElementById("humidity").textContent = `${data.main.humidity}%`;
        document.getElementById("wind").textContent = `${data.wind.speed} m/s`;

        
        const iconCode = data.weather[0].icon;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.style.display = "block";
    } catch (error) {
        alert("Error: " + error.message);
    }
}