var countriesAPI = "https://restcountries.com/v3.1/all";


var fet = fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    
    data.map((value) => {
      var param = {
        ...value,
        name: value.name.common,
        flag: value.flags.png,
        code: value.cioc,
        capital: value.capital,
        region: value.region,
        latitude: value.latlng[0],
        longitude: value.latlng[1]

      };
      createCountry(param);
        // console.log(value)
    })
  })
  
 
function createCountry({ name, flag, code, capital, region,latitude,longitude }) {
   
  document.body.innerHTML += 
`
<div class="card cardd text-center" style="width: 18rem;">
<h5 class="card-header" style="height:50px;overflow: auto;background-color:black;color:white">${name}</h5>
<div class = "bodyy">
        <img src=${flag} class="card-img-top" alt="CountryFlag" height="150px" width="200px">
        <div class="card-body textt" >
        <div style="height:160px;overflow: hidden;" >
            <p class="class-text text-center">Capital : ${capital}</p>
            <p class="class-text text-center">Region : ${region}</p>
            <p class="class-text text-center">Code : ${code}</p>
        </div>
        <button  class="btn btn-primary" onclick=(block(${latitude},${longitude},${name}))>Click for Weather</button>
</div>
  <div id=${name}>   </div>
</div>
</div>   
`
}



function block(lat,lang,name){

  const apiKey = "f9f09c45c12111bc8aeef408d900d79b"
  var weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=${apiKey}`
   
//   console.log(name)
 fetch(weatherAPI)
 .then((response) => response.json())
 .then((data)=> {
    // console.log(data)
     alert(`
          Country Name : ${name.id}
    
    Weather : ${data.weather[0].description}
    Humidity : ${data.main.humidity}
    Pressure : ${data.main.pressure}
    Temperature : ${data.main.temp}
    Latitude : ${lat}
    Longitude : ${lang}`)
    })
}
