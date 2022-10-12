//function to get the current time
function getTime(){
    var todayTime = moment().format("MMMM Do, YYYY h:m:ss");
    $('#currentDay').text(todayTime);
}
//call the getTime function every second so that the time stays updated
setInterval(getTime,1000);