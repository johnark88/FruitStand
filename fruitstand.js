console.log('JS file ready for execution master');
var multiplier = 0;
var priceChanged = 0;
//Starting Price of Fruit
var startingPrice = (50 + Math.floor(Math.random()* 949))/100;
var currentPrice = startingPrice;
var fruits =[ "apples", "bananas", "oranges", "grapes"];

$(document).ready(function(){
  $('p').html(formatUSD(startingPrice));
});

console.log(startingPrice);
console.log('currentPrice:', currentPrice);

//creates a positive or negative price change
var positNeg = function () {
  //positive neg number finder
  if (Math.random() < 0.5 ) {
    multiplier = -1;
  }
  else
  {
    multiplier = 1;
  }

};



//price Changer turns random number to cents and positive or negative
var priceChanger = function () {
  //Random price increase
  var randomNumber = 1 + Math.floor(Math.random() * 50);

  positNeg();
  priceChanged =  (randomNumber/100)*multiplier;
  // console.log('priceChanged' , priceChanged);
  console.log('Random Number =', priceChanged);
  };





//Format numbers to USD
function formatUSD(dollarAmount){
  return dollarAmount.toLocaleString('USD', {style: 'currency', currency: 'USD'});
}//end USD Format


////////////TIMER FUNCTION////////////////
var timer = function() {
var totalSeconds = 0;
var  clock = setInterval(setTime, 1000);
 function setTime(){
  ++totalSeconds;
  console.log(totalSeconds);
  if( totalSeconds%5 === 0){
    for (var i = 0; i < fruits.length; i++) {
      priceChanger();
      currentPrice += priceChanged;
      if(currentPrice > 9.99){
        currentPrice = 9.99;
      }//if statement
      if( currentPrice< 0.50){
        currentPrice = 0.50;
      }// if
      console.log('Current Price of ' + fruits[ i ] +' is now:', currentPrice);
      $('#'+ fruits[ i ] +'Price').html(formatUSD(currentPrice));
    }//end for loop
  }//if statement

  else if( totalSeconds === 10){
    alert("You are out of time");
    stopClock(clock);

  }// last else if statement
}// set time function
};//end of timer function

timer();
var stopClock= function(index){
  clearInterval(index);
};
