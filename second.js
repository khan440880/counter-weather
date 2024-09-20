const input=document.getElementById("city");
const button=document.getElementById("submit");
const cityName=document.getElementById("city-name")
const cityTime=document.getElementById("city-time")
const cityTemp=document.getElementById("city-temp")
const countryNmae=document.getElementById("country-name");

async function getData(city){
  const promise= await fetch(`https://api.weatherapi.com/v1/current.json?key=ab9a883832b340a78d891139240309&q=${city}&aqi=yes`);
  return await promise.json();
}

button.addEventListener("click", async ()=>{
  const value=input.value;
  const result= await getData(value);
  cityName.innerText=`City=${result.location.name}`;
  countryNmae.innerText=`Country=${result.location.country}`;
  cityTime.innerText=`Time and Date=${result.location.localtime}`;
  cityTemp.innerText=`Temprature= ${result.current.temp_c}`;
  
})