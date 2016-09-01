console.log('JS file ready for execution master');
var multiplier;
var priceChanged;
//Starting Price of Fruit
var startingPrice = (50 + Math.floor(Math.random()* 949))/100;
var currentPrice = startingPrice;
var fruits =[ "apples", "bananas", "oranges", "grapes"];

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
  time.innerHTML = (totalSeconds);
  if( totalSeconds%5 === 0){
    for (var i = 0; i < fruits.length; i++) {
    priceChanger();
    currentPrice += priceChanged;
    console.log('Current Price of ' + fruits[ i ] +' is now:', currentPrice);
    }
  }
  else if( totalSeconds == 300){
    alert("You are out of time");
    stopClock(clock);
    $('#time').empty();
    $('#time').html('<button onClick="shopAgain()">Shop Again?</button>');
  }
}
};

timer();
var shopAgain = function(){
  console.log('It Works');
};
var stopClock= function(index){
  clearInterval(index);
};
