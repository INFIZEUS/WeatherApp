const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");



let target = "kolkata";

const fetchData = async (target) => {

    // let abc = searchField.value;
    // console.log(abc);
    const url = `https://api.weatherapi.com/v1/current.json?key=057fa1f5250b42eb959181321243001&q=${target}`;

    const resposne = await fetch(url);
    const data = await resposne.json();

    console.log(data);

    // for getting all values and object
    // destructing objects 
    const {current:{
        temp_c, condition:{
            text,icon
        }
    }, location:{name, country, region, localtime}} = data;

    // this is for getting temperature
    // const temp = await data.current.temp_c;
    // temperatureField.innerText = `${temp}°`;

    // // for getting city, country and region name
    // const city = await data.location.name;
    // const countryName = await data.location.country;
    // const region = await data.location.region;
    // cityField.innerText = `${city}, ${countryName}, ${region}`;

    // // for getting time and date
    // const currTime = await data.location.localtime;
    // dateField.innerText = `${currTime}`;

    // // for getting condition
    // const cond = await data.current.condition.text;
    // weatherField.innerText = cond;

    // // for getting image 
    // const weatherImg = await data.current.conddition.icon;
    updateDom(temp_c,text,icon,name,country,region, localtime);


};

function updateDom (temperature, condition, weatherIcon, cityName, countryName, regionName, timeDate) {
    temperatureField.innerText = `${temperature}°`;
    cityField.innerText = `${cityName}, ${regionName}, ${countryName}`;
    weatherField.innerText = condition;
    dateField.innerText = timeDate;
    emojiField.src = `${weatherIcon}`
    
}

fetchData(target);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    target =searchField.value;
    fetchData(target);
});