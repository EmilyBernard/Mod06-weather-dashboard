//Capture cuurent date,time
function update() {
    $("#time").html(dayjs().format("MMMM D YYYY, H:mm:ss"));
  }
  setInterval(update, 1000);
  var currentTime = dayjs().format("HH");

//declare variables  
  var APIKey = "ad431daf2b902fd2d8a3b4c76d3a4c0f"
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
  var button = document.getElementById("button");
  var data = document.getElementsByClassName("wicon");
  var searchVal = document.querySelector(".searchVal");
  var city = $(".searchVal").val().trim();
  var locationIcon = document.querySelector("#icon");
  

  function populateFirstCard(data) {
    $("#location").html(data.name);
    $("#desc").html("Currently: " + data.weather[0].description);
    $("#temp").html("Temp: " + data.main.temp + "\u00B0F");
    $("#icon").html(
      "<img src='http://openweathermap.org/img/w/" +
        data.weather[0].icon +
        ".png' alt='Icon depicting current weather.'>"
    );
    $("#wind").html("Wind-Speed: " + data.wind.speed + "MPH");
    $("#humidity").html("Humidity: " + data.main.humidity + "%");
  }
