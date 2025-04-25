document.getElementById("waetherForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const city = document.getElementById("cityInput").value;
    const apiKey = "b3ca175f66ec7a1cd71f512069f348fa";

    if (city === "") {
        document.getElementById("error").textContent = "Please enter a city";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("error").textContent = "City not found";
                return;
            }

            document.getElementById("cityName").textContent = data.name;
            document.getElementById("temp").textContent = data.main.temp + "°C";
            document.getElementById("humidity").textContent = data.main.humidity + "%";
            document.getElementById("disc").textContent = data.weather[0].description;
            document.getElementById("weatherEmoji").textContent = "☀️"; // Simple default
            document.getElementById("error").textContent = "";
        })
        .catch(() => {
            document.getElementById("error").textContent = "Something went wrong!";
        });
});
