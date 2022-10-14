//function to get the current time
function getTime(){
    var todayTime = moment().format("MMMM Do, YYYY h:m:ss");
    $('#currentDay').text(todayTime);
}
//use map to change elements based on time
function pastPresentFuture(){
    var currentHour = Number(moment().format("k").valueOf());
    var mapOfTime = new Map([
        [$('#9am'),9],
        [$('#10am'),10],
        [$('#11am'),11],
        [$('#12pm'),12],
        [$('#1pm'),13],
        [$('#2pm'),14],
        [$('#3pm'),15],
        [$('#4pm'),16],
        [$('#5pm'),17]
    ]);
    for(const [key, value] of mapOfTime.entries()){ //entries creates an iterator for the map. We use a for of loop to iterate through the map. 
        if (value == currentHour){
            key.children('textarea').addClass("present");
        }
        if (value > currentHour){
            key.children('textarea').addClass("future");
        }
        if (value < currentHour){
            key.children('textarea').addClass("past");
        }
    }
}
//call the getTime function every second so that the time stays updated
pastPresentFuture();
setInterval(getTime,1000);
setInterval(pastPresentFuture,1000);

//get userinput in 9am field
$('#9am').submit(function(event){
    event.preventDefault();
    var userInput =  $('#9am').children('textarea').val();
    localStorage.setItem("9aminput", userInput);
    $('#9am').children('textarea').blur();
})
//get userinput in 10am field
$('#10am').submit(function(event){
    event.preventDefault();
    var userInput =  $('#10am').children('textarea').val();
    localStorage.setItem("10aminput", userInput);
    $('#10am').children('textarea').blur();
})
//get userinput in 11am field
$('#11am').submit(function(event){
    event.preventDefault();
    var userInput =  $('#11am').children('textarea').val();
    localStorage.setItem("11aminput", userInput);
    $('#11am').children('textarea').blur();
})
//get userinput in 12pm field
$('#12pm').submit(function(event){
    event.preventDefault();
    var userInput =  $('#12pm').children('textarea').val();
    localStorage.setItem("12pminput", userInput);
    $('#12pm').children('textarea').blur();
})
//get userinput for 1pm field
$('#1pm').submit(function(event){
    event.preventDefault();
    var userInput =  $('#1pm').children('textarea').val();
    localStorage.setItem("1pminput", userInput);
    $('#1pm').children('textarea').blur();
})
//get userinput for 2pm field
$('#2pm').submit(function(event){
    event.preventDefault();
    var userInput =  $('#2pm').children('textarea').val();
    localStorage.setItem("2pminput", userInput);
    $('#2pm').children('textareat').blur();
})
//3pm field
$('#3pm').submit(function(event){
    event.preventDefault();
    var userInput =  $('#3pm').children('textarea').val();
    localStorage.setItem("3pminput", userInput);
    $('#3pm').children('textarea').blur();
})
//4pm field
$('#4pm').submit(function(event){
    event.preventDefault();
    var userInput =  $('#4pm').children('textarea').val();
    localStorage.setItem("4pminput", userInput);
    $('#4pm').children('textarea').blur();
})
//5pm field
$('#5pm').submit(function(event){
    event.preventDefault();
    var userInput =  $('#5pm').children('textarea').val();//get userinput
    localStorage.setItem("5pminput", userInput);//save to local storage
    $('#5pm').children('textarea').blur(); //deslect input field
})

//populate fields from values in local storage
$('#9am').children('textarea').text(localStorage.getItem("9aminput"));
$('#10am').children('textarea').text(localStorage.getItem("10aminput"));
$('#11am').children('textarea').text(localStorage.getItem("11aminput"));
$('#12pm').children('textarea').text(localStorage.getItem("12pminput"));
$('#1pm').children('textarea').text(localStorage.getItem("1pminput"));
$('#2pm').children('textarea').text(localStorage.getItem("2pminput"));
$('#3pm').children('textarea').text(localStorage.getItem("3pminput"));
$('#4pm').children('textarea').text(localStorage.getItem("4pminput"));
$('#5pm').children('textarea').text(localStorage.getItem("5pminput"));