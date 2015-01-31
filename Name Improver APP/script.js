var adj = ["Stinky", "Speedy", "Hasty", "Nasty", "Tiny", "Squishy", "Ugly", "Floppy", "Bouncy", "Flubber", "Booder"];

var nameRank = ["SrA", "Airman", "Trainee", "Sgt", "Gen", "Admiral", "Private", "Prime Minister", "Col", "President", "Lord"];

var i = Math.floor((Math.random() * 10) + 1);
var j = Math.floor((Math.random() * 10) + 1);


var nameImprover = function () {
    $('#showMe').empty();
    document.getElementById("myInput");
    var name = document.getElementById("myInput").value;
    document.getElementById("showMe").innerHTML += "Your improved name is: <br/>" + "<h3>" + nameRank[j] + "&nbsp;" + name + " Mc" + adj[i] + " Pants" + "</h3>" + "<button class='btn btn-primary' onclick='tryAgain()'>" + "Try Again!" + "</button>" + "<a href='http://twitter.com/share?text=Check%20out%20my%20improved%20name!%20@calvinbhw%20'>Share This on Twitter</a>";
    i = Math.floor((Math.random() * 10) + 1);
    j = Math.floor((Math.random() * 10) + 1);

};
