console.log("Hello");
// API Meteo
// variables d'environnement
let longitude = 5.56;
let latitude = 50.63;
// let ville = "Liège";

const myAPIKey = "6f0d59dfcb080cd8495827d107606a39";
const urlWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${myAPIKey}&units=metric&lang=fr`;

const weatherTemplate = document.getElementById('weatherTemplate');
const weatherOutput = document.getElementById('weatherOutput');

// Grâce au response.json() je vais pouvoir récupérer et afficher les données de l'objet
fetch(urlWeatherAPI)
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    const list = responseJson.list[0];

    let date = list.dt_txt;
    let temperature = list.main.temp;
    let icon = list.weather[0].icon;
    let tempsDescription = list.weather[0].description;
    let humidite = list.main.humidity;

    let imageIcon = `https://openweathermap.org/img/wn/${icon}.png`;

    console.log(date);
    console.log(tempsDescription);
    console.log(icon);
    console.log(temperature); // 11.23 je récupère bien la température de mon premier élément YES
    console.log(humidite);
    let clonedTemplate = weatherTemplate.content.cloneNode(true);
    clonedTemplate.querySelector('.date').innerHTML = `${date}`;
    //clonedTemplate.querySelector('.descriptrion').innerHTML = "cucu";

    clonedTemplate.querySelector('.description').innerHTML = `${tempsDescription}`;

    clonedTemplate.querySelector('.imageIcon').innerHTML = `${imageIcon}`;

    clonedTemplate.querySelector('.temperature').innerHTML = `${temperature}`;
    clonedTemplate.querySelector('.humidite').innerHTML = `${humidite}`;

    // appendChild
    weatherOutput.appendChild(clonedTemplate);

  })
  .catch((error) => {
    console.log(error);
  });

