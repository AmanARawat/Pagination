//Using Promises
//Using 'then-catch' method
/*
fetch()->js func to call api,
by-default,'get' method is used,
no need to mention
*/
//json also returns promise
function getData() {
    fetch("https://restcountries.com/v3.1/name/bharat")
        .then((raw) => {
            //json also returns promise
            raw.json()
                .then((data) => {
                    [data] = data//destructuring data
                    document.getElementById("altSpellings").innerHTML = data.altSpellings[0]
                    document.getElementById("capital").innerHTML = data.capital
                    document.getElementById("areas").innerHTML = data.area
                    document.getElementById("subregion").innerHTML = data.subregion
                    document.getElementById("region").innerHTML = data.region
                    document.getElementById("population").innerHTML = data.population
                    document.getElementById("borders").innerHTML = data.borders
                    document.getElementById("name").innerHTML = data.name.official//
                    document.getElementById("flags").src = data.flags.png
                    document.getElementById("independent").innerHTML = data.independent
                    document.getElementById("unMember").innerHTML = data.unMember
                }).catch((error) => {
                    alert("Country name is invalid or Internal Server Error")
                    
                })
        }).catch((error) => {
            alert("Country name is invalid or Internal Server Error")
        })


}
getData()
function searchCountry() {
    var name=document.getElementById("country").value
    fetch("https://restcountries.com/v3.1/name/"+name)
        .then((raw) => {
            //json also returns promise
            raw.json()
                .then((data) => {
                    [data] = data//destructuring data
                    document.getElementById("altSpellings").innerHTML = data.altSpellings[0]
                    document.getElementById("capital").innerHTML = data.capital
                    document.getElementById("areas").innerHTML = data.area
                    document.getElementById("subregion").innerHTML = data.subregion
                    document.getElementById("region").innerHTML = data.region
                    document.getElementById("population").innerHTML = data.population
                    document.getElementById("borders").innerHTML = data.borders
                    document.getElementById("name").innerHTML = data.name.official//
                    document.getElementById("flags").src = data.flags.png
                    document.getElementById("independent").innerHTML = data.independent
                    document.getElementById("unMember").innerHTML = data.unMember
                }).catch((error) => {
                    alert("Country name is invalid or Internal Server Error")
                    
                })
        }).catch((error) => {
            alert("Country name is invalid or Internal Server Error")
        })


}
searchCountry()
