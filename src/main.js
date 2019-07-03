// Front end logic.
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


// import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#userInputForm").submit(function(event){
    let long = parseFloat($("#userLong").val());
    let lat = parseFloat($("#userLat").val());
    // placeholder clouds
    let cloud_score = false;
    // placeholder date
    let date = "2014-02-01";
    $.ajax({
      url: `https://api.nasa.gov/planetary/earth/imagery/?lon=${long}&lat=${lat}&date=2014-02-01&cloud_score=${cloud_score}&api_key=${process.env.API_KEY}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $("#imageRow").html("<img" + "src ='" + `${response.url}` + "' alt='Image of the area at " + `${long}` + " longitude and " + `${lat}` + " latitude' </img>");
        console.log("Success");
      },
      error: function() {
        $("#imageRow").html("<h1>There was an error processing your request. Please try a new location or date.</h1>");
        console.log("Error!");
      }
    });

// Date nust be given in year-mm-dd






    event.preventDefault();
  });
});
