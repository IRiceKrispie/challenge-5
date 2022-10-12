//function to get the current time
function getTime(){
    var todayTime = moment().format("MMMM Do, YYYY h:m:ss");
    $('#currentDay').text(todayTime);
}
//call the getTime function every second so that the time stays updated
setInterval(getTime,1000);

//get userinput in 9am field
$('#9am').submit(function(event){
    event.preventDefault();
    var userInput =  $('#9am').children('input').val();
    localStorage.setItem("9aminput", userInput);
    $('#9am').children('input').blur();
})
//get userinput in 10am field
$('#10am').submit(function(event){
    event.preventDefault();
    var userInput =  $('#10am').children('input').val();
    localStorage.setItem("10aminput", userInput);
    $('#10am').children('input').blur();
})
//get userinput in 11am field
$('#11am').submit(function(event){
    event.preventDefault();
    var userInput =  $('#11am').children('input').val();
    localStorage.setItem("11aminput", userInput);
    $('#11am').children('input').blur();
})
//get userinput in 12pm field
$('#12pm').submit(function(event){
    event.preventDefault();
    var userInput =  $('#12pm').children('input').val();
    localStorage.setItem("12pminput", userInput);
    $('#12pm').children('input').blur();
})
//get userinput for 1pm field
$('#1pm').submit(function(event){
    event.preventDefault();
    var userInput =  $('#1pm').children('input').val();
    localStorage.setItem("1pminput", userInput);
    $('#1pm').children('input').blur();
})
//get userinput for 2pm field
$('#2pm').submit(function(event){
    event.preventDefault();
    var userInput =  $('#2pm').children('input').val();
    localStorage.setItem("2pminput", userInput);
    $('#2pm').children('input').blur();
})
//3pm field
$('#3pm').submit(function(event){
    event.preventDefault();
    var userInput =  $('#3pm').children('input').val();
    localStorage.setItem("3pminput", userInput);
    $('#3pm').children('input').blur();
})
//4pm field
$('#4pm').submit(function(event){
    event.preventDefault();
    var userInput =  $('#4pm').children('input').val();
    localStorage.setItem("4pminput", userInput);
    $('#4pm').children('input').blur();
})
//5pm field
$('#5pm').submit(function(event){
    event.preventDefault();
    var userInput =  $('#5pm').children('input').val();
    localStorage.setItem("5pminput", userInput);
    $('#5pm').children('input').blur();
})
//populate fields from values in local storage
$('#9am').children('input').attr("value", localStorage.getItem("9aminput"));
$('#10am').children('input').attr("value", localStorage.getItem("10aminput"));
$('#11am').children('input').attr("value", localStorage.getItem("11aminput"));
$('#12pm').children('input').attr("value", localStorage.getItem("12pminput"));
$('#1pm').children('input').attr("value", localStorage.getItem("1pminput"));
$('#2pm').children('input').attr("value", localStorage.getItem("2pminput"));
$('#3pm').children('input').attr("value", localStorage.getItem("3pminput"));
$('#4pm').children('input').attr("value", localStorage.getItem("4pminput"));
$('#5pm').children('input').attr("value", localStorage.getItem("5pminput"));
