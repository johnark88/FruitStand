console.log('JS file ready for execution master');
//Global Variables
var multiplier = 0;
var priceChanged = 0;
var currentPrice = startingPrice;
var wallet = 100;
var applesPrice =0;
var redGrapesBought = 0;
var greenGrapesBought= 0;
var orangesBought= 0;
var pearsBought = 0;

//Starting Price of Fruit
var startingPrice = (50 + Math.floor(Math.random()* 949))/100;
//Global Array
var fruits =[ {name: "greenGrapes", price: startingPrice, avgPrice: 0, totalPrice: startingPrice, fruitsPurchased: 0},
{name:"redGrapes", price: startingPrice, avgPrice: 0, totalPrice: startingPrice, fruitsPurchased: 0},
{name:"oranges", price: startingPrice, avgPrice: 0, totalPrice: startingPrice, fruitsPurchased:0}, 
{name:"pears", price: startingPrice, avgPrice: 0, totalPrice: startingPrice, fruitsPurchased:0}];


//All Button Clicks
$(document).ready(function(){
  timer();
///Average price of
  $('#redGrapesAvg').html('<p>' +formatUSD( fruits[1].avgPrice) + '</p>');
  $('#greenGrapesAvg').html('<p>' + formatUSD(fruits[0].avgPrice) + '</p>');
  $('#orangesAvg').html('<p>' + formatUSD(fruits[2].avgPrice) + '</p>');
  $('#pearsAvg').html('<p>' + formatUSD(fruits[3].avgPrice) + '</p>');
  $('#redGrapesPrice').html(formatUSD(startingPrice));
  $('#greenGrapesPrice').html(formatUSD(startingPrice));
  $('#orangesPrice').html(formatUSD(startingPrice));
  $('#pearsPrice').html(formatUSD(startingPrice));
  $('#wallet').html('<p>' +formatUSD(wallet) +'</p>');
console.log(fruits);
  //greenGrapes onClick
  $('#greenGrapes').on('click', 'button', function(){
    console.log('in greenGrapes` onClick');
    console.log('the price of greenGrapes is: ', fruits[0].price);
    if(wallet< fruits [ 0 ].price){
      alert('You do not have enough money to buy Green Grapes.');
      wallet= wallet;
      $('#wallet').html('<p>' +formatUSD(wallet) +'</p>');

    }//end if
    else{
    wallet = wallet- fruits[ 0 ].price;
    $('#wallet').html('<p>' +formatUSD(wallet) +'</p>');
    fruits[ 0 ].fruitsPurchased++;

  }//end eles

  console.log('Green Grapes bought:', fruits[0].fruitsPurchased);
    console.log(wallet);
  });//end GreenGrapes on click

  //oranges onClick
  $('#oranges').on('click', 'button', function(){
    console.log('in oranges onClick');
    console.log('the price of oranges is: ', fruits[2].price);

    if(wallet< fruits [ 2 ].price){
      alert('You do not have enough money to buy Oranges.');
      wallet= wallet;
      $('#wallet').html('<p>' +formatUSD(wallet) +'</p>');
    }//end if
    else{
    wallet = wallet- fruits[ 2 ].price;
    $('#wallet').html('<p>' +formatUSD(wallet) +'</p>');
    orangesBought++;
  }//end else
    console.log(wallet);
    console.log('Oranges bought:', orangesBought);

  });//end oranges on click


  //bananas on Click
  $('#redGrapes').on('click', 'button', function(){
    console.log('in redGrapes onClick');
    console.log('the price of redGrapes is: ', fruits[1].price);

    if(wallet< fruits [ 1 ].price){
      alert('You do not have enough money to buy Red Grapes.');
      wallet= wallet;
      $('#wallet').html('<p>' +formatUSD(wallet) +'</p>');
    }//end if
    else{
    wallet = wallet- fruits[ 1  ].price;
    $('#wallet').html('<p>' +formatUSD(wallet) +'</p>');
    redGrapesBought++;
  }//end else
    console.log('Red Grapes bought:', redGrapesBought);
    console.log(wallet);
  });//end bananas on click

  //pears onClick
  $('#pears').on('click', 'button', function(){
    console.log('in pears onClick');
    console.log('the price of pears is: ', fruits[3].price);
    if(wallet< fruits [ 3 ].price){
      alert('You do not have enough money to buy Pears.');
      wallet= wallet;
      $('#wallet').html('<p>' +formatUSD(wallet) +'</p>');
    }//end if
    else{
    wallet = wallet- fruits[ 3 ].price;
    $('#wallet').html('<p>' +formatUSD(wallet) +'</p>');
    pearsBought++;
  }//end else
    console.log('Pears bought:', pearsBought);
    console.log(wallet);
  });//end pear on click

});//end of document ready
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


//Format numbers to USD  -- thanks Millie
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
  if( totalSeconds%15 === 0){
    for (var i = 0; i < fruits.length; i++) {
      priceChanger();
      currentPrice = fruits[i].price + priceChanged;
      fruits[ i ].price = currentPrice;
      fruits[ i ].totalPrice += fruits[i].price;
      fruits[ i ].avgPrice = fruits[ i ].totalPrice/ fruits[ i ].fruitsPurchased;
      $('#'+ fruits[ i ].name +'Avg').empty();
      $('#'+ fruits[ i ].name +'Avg').html('<p>Average price of '+fruits[i].name + ': ' + fruits[i].avgPrice + '</p>');
      console.log("the average price of "+ fruits[i].name +" is "+fruits[ i ].avgPrice);
      console.log('Total price of '+ fruits[i].name +': '+fruits[i].totalPrice);
      console.log('price of ' + fruits[i] +" is " +fruits[ i ].price);

      if(currentPrice > 9.99){
          currentPrice -= Math.abs(priceChanged);
        }//if statement
        if( currentPrice < 0.50){
          currentPrice += Math.abs(priceChanged);
      }// if
      $('#'+ fruits[ i ].name +'Price').html(formatUSD(fruits[ i ].price));

    }//end for loop
  }//if statement

  else if( totalSeconds === 301){
    alert("You are out of time");
    stopClock(clock);

  }// last else if statement
}// set time function
};//end of timer function


var stopClock= function(index){
  clearInterval(index);
};// end timer function
