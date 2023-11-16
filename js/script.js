console.log("Hello");

/* requête météo */
// API Meteo
// variables d'environnement :
// coordonnées géographiques
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
    // const list = responseJson.list[0];

    responseJson.list.forEach(element => {

     console.log(element);
     /* Unités de mesure disponible : température en Celsius */

    let date = element.dt_txt;
    let temperature = element.main.temp;
    let icon = element.weather[0].icon;
    let tempsDescription = element.weather[0].description;
    let humidite = element.main.humidity;

    console.log(date);

    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'UTC+01:00',
      timeZoneName: 'short'
    };

  

     
    
    const maDate = new Date();
    console.log(maDate);
    let dateLocale = maDate.toLocaleDateString("fr") // 20/10/2021
     
    console.log(dateLocale);


    // modification de l'apparence de la date
    const jour = dateLocale.split(' ');
   
    
    console.log(jour[0]); // me donne le jour

    
    const heure = date.split(' ');
    console.log(heure[1]); // me donne l'heure

    // Récupération de l'icone du temps
    let imageIcon = `https://openweathermap.org/img/wn/${icon}.png`;

    
    console.log(tempsDescription);
    console.log(icon);
    console.log(temperature); // 11.23 je récupère bien la température de mon premier élément, YES
    console.log(humidite);

    // innerHTML
    let clonedTemplate = weatherTemplate.content.cloneNode(true);

    clonedTemplate.querySelector('.jour').innerHTML = `${jour[0]}`;
    clonedTemplate.querySelector('.heure').innerHTML = `${heure[1]}`;
    //clonedTemplate.querySelector('.descriptrion').innerHTML = "cOucOu";
    clonedTemplate.querySelector('.description').innerHTML = `${tempsDescription}`;

    // !!! la source de l'image ce n'est pas innerHTML mais src
    clonedTemplate.querySelector('.imageIcon').src = `${imageIcon}`;

    clonedTemplate.querySelector('.temperature').innerHTML = `${temperature}`;
    clonedTemplate.querySelector('.humidite').innerHTML = `${humidite}`;

    // appendChild
    weatherOutput.appendChild(clonedTemplate);
    });
   
  })

  .catch((error) => {
    console.log(error);
  });

