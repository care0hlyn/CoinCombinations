
var coins = function(change) {
var changeArray = [];
var totalNumberArray = [];
var numberOfQuarters = 0;
var numberOfDimes = 0;
var numberOfNickels = 0;
var numberOfPennies = 0;

  while ( change >= 0 ) {

    if (change >= 25) {
      change = (change - 25);
      changeArray.push("quarter");
    } else if (change >= 10) {
        change = (change - 10);
        changeArray.push("dime");
    } else if (change >= 5) {
        change = (change - 5);
        changeArray.push("nickel");
    } else if (change >= 1) {
        change = (change - 1)
        changeArray.push("penny");
    } else {
      break;
    }
  };

    for (var i = 0; i <= changeArray.length; i++) {
      if (changeArray[i] === "quarter") {
        numberOfQuarters += 1;
        } else if (changeArray[i] === "dime") {
          numberOfDimes += 1;
        } else if (changeArray[i] === "nickel") {
          numberOfNickels += 1;
        } else if (changeArray[i] === "penny") {
          numberOfPennies += 1; }
          else {
          break;
          }
  };

  totalNumberArray.push(numberOfQuarters);
  totalNumberArray.push(numberOfDimes);
  totalNumberArray.push(numberOfNickels);
  totalNumberArray.push(numberOfPennies);

  return totalNumberArray;

};
//console.log(coins(70));


$(document).ready(function() {
  $('form#coins').submit(function(event) {
  var input = parseInt($("input#yourChange").val());
  var result = coins(input);



 // $(".result").show();
  $(".q").append(result[0]);
  $(".quarters").show();
  $(".d").append(result[1]);
  $(".dimes").show();
  $(".n").append(result[2]);
  $(".nickels").show();
  $(".p").append(result[3]);
  $(".pennies").show();
  $(".result").text(coins(input));
  event.preventDefault();
  });
});

/*
var quarter = 25;
var dime = 10;
var nickel = 5;
var penny = 1;


//var leftOvers =

var totalQuarters = Math.floor(change / quarter)


if(change === 50) {
  return "two quarters";
} else if (change === 1) {
  return "four quarters";
} else if (change === 10) {
  return "one dime";
} else if (change % quarter !== 0) {
  return "one quarter and two pennies";
}
*/




