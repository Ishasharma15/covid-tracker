var date = document.querySelector("#date")
var death = document.querySelector("#death")
var inf = document.querySelector("#inf")
var rec = document.querySelector("#rec")

fetch("https://covid19.mathdro.id/api").then(data => data.json())
.then(data => {

    death.textContent = data.deaths.value
    rec.textContent =data.confirmed.value
    inf.textContent =data.recovered.value
    date.textContent = new Date(data.lastUpdate).toDateString()  
    console.log(data.lastUpdate)
    






})