//running function to get user location 

// var x = document.getElementById("search-history");

// function getLocation() {
 // if (navigator.geolocation) {
   // navigator.geolocation.getCurrentPosition(showPosition);
 // } else {
  //  x.innerHTML = "Geolocation is not supported by this browser.";
 // }
//}

//function showPosition(position) {

  //  lat = position.coords.latitude; 
    //lon = position.coords.longitude;
    //console.log(lat);
    //console.log(lon);


//var APIkey ="4c775c14f8116de88e3696311fd2f42a"
//var weatherURL ="https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial &appid=" + APIkey; 
//} 


//5 Day Forecast from search 
var cities = [];
function citySearch() {

    $("#search-input").css("display", "block");
    var cityInput = $("#search").val();
    console.log(cityInput);
    var value = $(this).data("name")
    var APIkey ="4c775c14f8116de88e3696311fd2f42a"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ value 
    + "&units=imperial&appid=" + APIkey;

    $.json({
        url: queryURL,
        method: "GET"

    }).then(function(response2) {
        console.log(response2);

        //var selectCity = response2.list[0].name;
        var forecastIconOne = "https://openweathermap.or/img/w/" + response2.list[0].weather[0].icon + ".png";
        var forecastTempOne = response2.list[0].main.temp;
        var forecastHumidOne = response2.list[0].main.humidity;
        var forecastWindOne = response2.list[0].main.wind;
        var forecastDateOne = response2.list[0].dt_txt;
        $("#forecast-Temp-One").prepend(forecastTempOne);
        $("#forecast-Humid-One").prepend(forecastHumidOne);
        $("#forecast-Wind-One").prepend(forecastWindOne);
        $("#forecast-Date-One").prepend(forecastDateOne);
        $("#forecast-Icon-One").attr("src", forecastIconOne);
        

        
    })

}

var retrieveHistory = localStorage.getItem("Search Result");
if(retrieveHistory){
  cities = retrieveHistory.split(",");
  renderButtons();

}

function renderButtons(){

  for (var i = 0; i < cities.length; i++) {

    var a = $("<button>");
    a.addClass ("city-name");
  }
}
