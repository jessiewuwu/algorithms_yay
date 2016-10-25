// Given a certain number of cents, produce change with the fewest coins possible [DATADOG]
var giveCoins = function(target) {
  var results = {};
  var currency = [25, 10, 5, 1];
  
  for(var i = 0; i < currency.length; i++){
    if(target === 0) {
      return results;
    } else {
      var numOfCurrentCoin = Math.floor(target / currency[i]);
      target = target - (numOfCurrentCoin * currency[i]);
      results[currency[i]] = numOfCurrentCoin;
    }
  }
  return results;
}

console.log(giveCoins(95));


// Datadog's Technical Screening ORIGINAL SOLUTION 10.11.2016

// 100 => 4 quarters

/* 
Your previous Plain Text content is preserved below:

25 cents
10 cents
5 cents
1 cent

1. do modulo
100 % 25 = 0

if its 0, then use only quarters: Target / 25 

100 % 10 = 0, Target / 10

1. divide the target and quarter, get math.floor
95 / 25 = 3.8 // get the Math.floor(95/25) = 3

2. Subtract the Target from (Math.floor x 25)

repeat

3. 20 / 10 = 2. 
20 - 2(10) = 0


95 - 3(quarters) = 20  
20 - 2(dimes) = 0

target = 95
numOfQuarters = 95 / 25 = 3.8
target = 95 - (numOfQuarters*25); ==> 95 - (3*25) = 75
target = 75 != 0
 */

var giveCoins = function(target) {

  var results = [];
  var currency = [25, 10, 5, 1];
  
  // first iterate through the currency array
  // keep iterating until target = 0

  //keep doing this until target = 0 
  /*while(target > 0) {
    target = target - (numOfQuarters*quarter);
    for(
  
  }*/
  
  for(var i = 0; i < currency.length; i++){
    if(target === 0) {
      return results;
    } else {
      var numOfCurrentCoin = Math.floor(target / currency[i]);
      target = target - (numOfCurrentCoin * currency[i]);
      results.push(numOfCurrentCoin);
    }
  }
  

}