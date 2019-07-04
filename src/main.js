// Front end logic.
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';



$(document).ready(function() {
  $("#userInputForm").submit(function(event){
    let long = parseFloat($("#userLong").val());
    let lat = parseFloat($("#userLat").val());
    // placeholder clouds
    let cloud_score = false;
    // placeholder date
      // debugger;
      //only works so far with 2014
    let date = $("#userDate").val().toString();
    let date2 = "1995-05-02";
    let dateStringGetter = `${date}`;
    if (date === dateStringGetter){
      console.log("true");
    }
    let resolution = 0.8816 - parseFloat($("#resolutionRange").val());

    const cycledDays = ["01", "15"];
    const cyclesMonths = ["01", "02", "03", "04", "05", "06", "07", "08" ,"09", "10", "11", "12"];


    function call(day, month){
      // debugger;
      let imgUrl;
      debugger;
      return $.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${long}&lat=${lat}&date=2014-` + month + `-` + day +`&cloud_score=${cloud_score}&api_key=${process.env.API_KEY}&dim=${resolution}`);
    }

    console.log(call("01", "01"));

    $.when(call("01", "01"), call("01", "03"), call("01", "05"), call("01", "12")).done(function(img1,img2,img3, img4){
      console.log(img1, img2, img3, img4);
        console.log(img1[2].responseJSON.url);
        $("#imageRow").append("<img src='" + img1[2].responseJSON.url + "'>");
    });
    // Date nust be given in year-mm-dd
    event.preventDefault();
  });

});

// var requests = [$.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${long}&lat=${lat}&date=2014-${cyclesMonths[i]}-${cycledDays[j]}&cloud_score=${cloud_score}&api_key=${process.env.API_KEY}&dim=${resolution}`)];
// for (let i = 0; i < cyclesMonths.length; i ++){
//   for(let j = 0; j < cycleDays.length; j++){
//   requests.push($.get(`https://api.nasa.gov/planetary/earth/imagery/?lon=${long}&lat=${lat}&date=2014-${cyclesMonths[i]}-${cycledDays[j]}&cloud_score=${cloud_score}&api_key=${process.env.API_KEY}&dim=${resolution}`));
//   }
// }
