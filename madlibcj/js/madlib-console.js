var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var favorites = [];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

document.getElementById("create").addEventListener("click", function(){
   
random1 = Math.floor((Math.random() * startupX.length));
random2 = Math.floor((Math.random() * startupY.length));
   
    document.getElementById("demo").innerHTML = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];

document.getElementById("save").addEventListener("click", function(save){
    favorites = Math.floor((Math.random() * startupX.length + startupY.length));
   

}
);