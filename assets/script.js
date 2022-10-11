//running function to get user location 

 var x = document.getElementById("search-history");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

    lat = position.coords.latitude; 
    lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);


var APIkey ="4c775c14f8116de88e3696311fd2f42a"
var weatherURL ="https://api.openweathermap.org/data/2.5/forecast?lat=" +"&lat" + lat + "&lon=" + lon + "&units=imperial &appid=" + APIkey; 
} 


//5 Day Forecast from search 
var cities = [];
function citySearch() {

    $("#search-input").css("display", "block");
    var cityInput = $("#search").val();
    console.log(cityInput);
    var value = $(this).data("name")
    var APIkey ="4c775c14f8116de88e3696311fd2f42a"
    var queryURL = "https://api.openweathermap.org/data/2.5/find?q="+ value 
    + "&units=imperial&appid=" + APIkey;

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response) {
        console.log(response);

        //var selectCity = response.list[0].name;
        var forecastIconOne = "https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png";
        var forecastTempOne = response.list[0].main.temp;
        var forecastHumidOne = response.list[0].main.humidity;
        var forecastWindOne = response.list[0].main.wind;
        var forecastDateOne = response.list[0].dt_txt;
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
    a.attr("data-name");
    a.text(cities[i]);

    var history = localStorage.getItem("Search Result") || 0;
    localStorage.setItem("Search Result", cities);

    $("#search-history").append(a);
  }
}

$("#search-button").on("click", function(event){
  event.preventDefault();

  var city = $("#search").val().trim();
  var savedCity = $("#search").val().trim();

  cities.push(city);

  renderButtons();
});

$(document).on("click" , ".city-name" , citySearch);

renderButtons();