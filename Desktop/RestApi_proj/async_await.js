//Using 'try-catch' method->promises

async function getData() {
    try{ 
        var rdata = await fetch("https://restcountries.com/v3.1/name/bharat")

        //json also returns promise
        var result = await rdata.json()

        var [data] = result//destructuring data
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
    }
    catch(error){
           alert("Country name is invalid or Internal Server Error")
    }
}
getData()
async function searchCountry() {
    
    try {
        var name = document.getElementById("country").value
        var rdata = await fetch("https://restcountries.com/v3.1/name/"+name)

        //json also returns promise
        var result = await rdata.json()

        var [data] = result//destructuring data
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
    }
    catch (error) {
        alert("Country name is invalid or Internal Server Error")
    }


}
searchCountry()