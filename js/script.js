console.log("Hello");

/* 6f0d59dfcb080cd8495827d107606a39 */
/* Appli meteo STEP BY STEP */
// Rendez-vous sur le site OpenWeatherMap à l'adresse suivante : https://openweathermap.org . Inscrivez vous ou ouvrez votre compte.

// Une fois connecté, accédez à votre tableau de bord ou à la section "API keys" pour créer une nouvelle clé API. Suivez les instructions pour générer une nouvelle clé API pour accéder aux données météorologiques.

//Accédez à la documentation de l'API OpenWeatherMap à l'adresse : https://openweathermap.org/forecast5.

/*
    Familiarisez-vous avec la documentation, en particulier avec les éléments suivants :
Les paramètres nécessaires pour effectuer une requête météo, tels que les coordonnées géographiques (latitude et longitude).
Les unités de mesure disponibles (par exemple, les températures en Celsius).
L'URL de base pour effectuer des requêtes météo.
Les informations sur les données renvoyées par l'API, y compris la structure des réponses.

*/

/* How to make an API call
You can search weather forecast for 5 days with data every 3 hours by geographic coordinates. All weather data can be obtained in JSON and XML formats.

 api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

*/
// Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default.

// You can use the lang parameter to get the output in your language.

// variables d'environnement
let longitude = 5.56;
let latitude = 50.63;
// let ville = "Liège";

const myAPIKey = "6f0d59dfcb080cd8495827d107606a39";
const urlWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${myAPIKey}&units=metric&lang=fr`;

const weatherTemplate = document.getElementById('weatherTemplate');
const weatherOutput = document.getElementById('weatherOutput');
/*
Pour récupérer le tableau des 40 objets en JSON
  https://api.openweathermap.org/data/2.5/forecast?lat=50.63&lon=5.56&appid=6f0d59dfcb080cd8495827d107606a39&units=metric&lang=fr

*/

// Variables optionnelles
/*
For temperature in Celsius use units=metric
For language in en use lang=fr
For date YYY-MM-DD en français dt Mercredi 25 octobre
For hours 
*/

/*
    Familiarisez-vous avec la documentation, en particulier avec les éléments suivants :
Les paramètres nécessaires pour effectuer une requête météo, tels que les coordonnées géographiques (latitude et longitude).
Les unités de mesure disponibles (par exemple, les températures en Celsius).
L'URL de base pour effectuer des requêtes météo.
Les informations sur les données renvoyées par l'API, y compris la structure des réponses.
*/

// pour accéder à l'ul id="weather-output"
// console.log(weatherOutput); // <ul id="weather-out"></ul>


/*
Utilisez la fonction fetch() pour effectuer une requête à l'API OpenWeatherMap en utilisant l'URL weatherUrl.
Gérez les réponses du serveur en utilisant la méthode .then().
*/
/*
Manipuler le DOM
Créer de nouveaux éléments HTML de façon dynamique et y ajouter le contenu d'une requête HTTP.

La méthode fetch() nous renvoie souvent un tableau d'objets, sous format JSON. Je vais vous demander de générer des éléments HTML pour chaque élément du tableau renvoyé par l'API.

Pour ce faire nous aurons besoin :

De récupérer le tableau d'objets (via la méthode fetch()).
Un fois le tableau récupéré, utiliser la boucle forEach() pour obtenir chaque objet du tableau.
Grâce à cette boucle, pour chaque élément du tableau, je vais générer une balise HTML pour l'auteur, et une pour le commentaire, pour ce faire nous aurons besoin de :
La méthode createElement() qui va créer notre élément HTML.
La méthode createTextNode() qui va remplir notre balise HTML avec les valeurs de l'élément sur lequel nous sommes en train de boucler.
La méthode appendChild() ou append() qui nous permettent de faire d'un élément HTML l'enfant d'un deuxième élément.
La méthode insertBefore() qui va indiquer l'endroit où insérer le contenu dans notre index.html.
fetch("l-url-de-mon-api", {method: "GET"})
.then(response => {
  return response.json();
})
.then(response => {
  let datas = response;
  datas.forEach(data => {
    let newHtmlElement = document.createElement("HTML TAG");
    let newContent = document.createTextNode(data.author);
    // let newContent = newHtmlElement.createTextNode(data.author); A tester.
    newHtmlElement.appendChild(newContent);
    let currentElement = document.getElementById("#ID");
    document.body.insertBefore(newHtmlElement, currentElement.nextElementSibling);
  })
})
*/

// Méthode FETCH : https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok
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

    console.log(date);
    console.log(tempsDescription);
    console.log(icon);
    console.log(temperature); // 11.23 je récupère bien la température de mon premier élément YES
    console.log(humidite);
let clonedTemplate = weatherTemplate.content.cloneNode(true);
clonedTemplate.querySelector('.date').innerHTML = `${date}`;
//clonedTemplate.querySelector('.descriptrion').innerHTML = "cucu";

clonedTemplate.querySelector('.description').innerHTML = `${tempsDescription}`;
clonedTemplate.querySelector('.temperature').innerHTML = `${temperature}`;
clonedTemplate.querySelector('.humidite').innerHTML = `${humidite}`;




weatherOutput.appendChild(clonedTemplate);

  })
  .catch((error) => {
    console.log(error);
  });

  /*
  <template id="myTemplate">
      <p>Template content</p>
  </template>

   <!-- JavaScript function clones the template and adds it to the document. -->
    <button onclick="useTemplate();">Show content</button>
    <script>
      function useTemplate() {
      var myTemplate = document.getElementById('myTemplate');
          normalContent = document.getElementById('normalContent');
          clonedTemplate = myTemplate.content.cloneNode(true);
          normalContent.appendChild(clonedTemplate);
          }
    </script>

*/
/*
          <main>
    <h1>Meteo</h1>
    <!-- ul est le point d'injection -->
    <ul id="weatherOutput">
        <p>C'est ici : </p>
        

    </ul>

*/



