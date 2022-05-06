'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const country = document.querySelector('.input-country')
const btne = document.querySelector('.inputtt')

///////////////////////////////////////
 const getCountryData = function(country){


const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
request.send();
//console.log(request.responseText);
var getData =(object) =>{
  for(var i in object ){
    if(Object.values(object[i]).length > 3 && typeof(Object.values(object[i])) ==="object"){
      //console.log(Object.values(object[i]));
      return `${(Object.values(object[i])).join('')} `
    } else{
    return (Object.values(object[i]))[0]
    //console.log((Object.values(object[i]))[0])
  }
}
}


request.addEventListener('load', function(){
  //console.log(this.responseText);
  const [data] = JSON.parse(this.responseText);
  //console.log(data);
  //  typeof(Object.keys(data.currencies[i])) === "object" && console.log( (Object.values(data.currencies[i]))[0])

  var html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${ (+data.population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${getData(data.languages)}</p>
        <p class="country__row"><span>💰</span>${getData(data.currencies)}</p>
    </div>
  </article> `;

  countriesContainer.insertAdjacentHTML('beforeend',html);
  countriesContainer.style.opacity =1;
});
}

//for (const prop in country.currencies){
//  prop.name.value()
//}

getCountryData("kenya")
getCountryData("nigeria")
getCountryData("america")
getCountryData("switzerland")
btne.addEventListener('click',()=>{
  getCountryData(country.value)
})
// country.onchange =   getCountryData(country.value)
var info = country.value
// var cova = () => getCountryData(country.value)
// getCountryData(info)


const request = fetch(`https://restcountries.com/v3.1/name/portugal`);

  const getCountryDat = function( country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`).then((response)=>{
      console.log(response);
     return  response.json();
    }
   err => alert(err)).then((data)=>{
      console.log(data);

      const neigbhour = data[0].border[0]
      if(!neigbhour) return;

      return fetch(`https://restcountries.com/v3.1/name/${neigbhour}`);
      //renderCountry(data[0])
    }).then((response) => response.json()).then(data => renderCountry(data, 'neigbhour'))
  }
 getCountryDat('portugal')
  console.log(request)
