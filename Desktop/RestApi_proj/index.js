//Pre-requisite->fetch data into proj
//to generate request->open() func 
//json.parse()->convert json data in js obj
//json.stringify()->convert js obj into json
function getData(){
    let request= new XMLHttpRequest()
    request.open("get","https://restcountries.com/v3.1/name/bharat")
    request.send()
    request.addEventListener("load",()=>{
        //convert json data in js object
        // console.log(request.responseText)
        
        var [data]=JSON.parse(request.responseText)//destructuring
        document.getElementById("altSpellings").innerHTML = data.altSpellings[0]
        document.getElementById("capital").innerHTML=data.capital
        document.getElementById("areas").innerHTML = data.area
        document.getElementById("subregion").innerHTML=data.subregion
        document.getElementById("region").innerHTML=data.region
        document.getElementById("population").innerHTML=data.population
        document.getElementById("borders").innerHTML=data.borders
        document.getElementById("name").innerHTML=data.name.official//
        document.getElementById("flags").src=data.flags.png
        document.getElementById("independent").innerHTML=data.independent
        document.getElementById("unMember").innerHTML=data.unMember
    })

}
getData()
function searchCountry() {
    var name = document.getElementById("country").value
    let request = new XMLHttpRequest()
    request.open("get", "https://restcountries.com/v3.1/name/"+name)
    request.send()
    request.addEventListener("load", () => {
        //convert json data in js object
        // console.log(request.responseText)
        
        var [data] = JSON.parse(request.responseText)//destructuring
        document.getElementById("altSpellings").innerHTML = data.altSpellings[0]
        document.getElementById("capital").innerHTML = data.capital
        document.getElementById("areas").innerHTML = data.area
        document.getElementById("subregion").innerHTML = data.subregion
        document.getElementById("region").innerHTML = data.region
        document.getElementById("population").innerHTML = data.population
        document.getElementById("borders").innerHTML = data.borders
        document.getElementById("name").innerHTML = data.name.official
        document.getElementById("flags").src = data.flags.png
        document.getElementById("independent").innerHTML = data.independent
        document.getElementById("unMember").innerHTML = data.unMember

    })

}
