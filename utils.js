function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }

var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Science/Beverages%20Nutrition.csv";
//List(strings) - of all beverage names
var beverageName = getColumn(url, 1);
//List(strings) - of beverage type for each beverage
var beverageType = getColumn(url, 2);
//List (string)- if each beverage is sugar free or not - "true" or "false"
var sugarFree = getColumn(url, 3);
//List(strings) - of the amount of calories for each beverage 
var calories = getColumn(url, 4);
//List(strings) - of the amount of sugar for each beverage (in grams)
var sugarG = getColumn(url, 8);
//List(strings) - of the amount of caffine for each beverage (in Mg)
var caffeineMg = getColumn(url, 10);
//List(strings) - of the size of each beverage (in floz)
var servingDescriptionFlOz = getColumn(url, 12);


/*
Takes an beverage type as a parameter and returns a list of beverages in that type
type {string} - the desired type of beverage
return {list} - the list of matching beverages
*/
function beveragesByType(type){
  var matchingBeverages = [];
if (!(typeof beverage == 'string')){
  matchingBeverages.push("ERROR: check that input is a string");
  
  return matchingBeverages;
  }
else{
  
  for (var i = 0; i < beverageType.length; i++){
    if (beverageType[i].toLowerCase() == type.toLowerCase()){
      matchingBeverages.push(beverageName[i]);
    }
  }
  if (matchingBeverages.length == 0){
      matchingBeverages.push("No matching beverages");
  }
  return matchingBeverages;
}
}
/*
Takes any beverage as a parameter and returns a list of different brands of that beverage and their sugar count
beverage {string} - the desired beverage
return {list} - the list of matching beverages and their sugar counts
*/
  function sugarCount(beverage){
    var matches = [];
  if (!(typeof beverage == 'string')){
  matches.push("ERROR: check that input is a string");
  
  return matches;
  }
else{
    for (var i = 0; i < beverageName.length; i++){
      if(beverageName[i].toLowerCase().includes(beverage.toLowerCase())){
        matches.push((beverageName[i] + " has " + sugarG[i] + " grams sugar"));
      }
    }
    if (matches.length == 0){
      matches.push("Name not found");
    }
   return matches; 
  }
}

/*
Takes beverage type and preferred amount of calories as parameters and returns a list of beverages that match the type and whose calories are within a range of 3 above or 3 below the preferred calorie amount
type {string} - the desired beverage type
Calories {number} - the desired amount of calories
return {list} - the list of matching beverages and their calorie counts
*/
function getBeveragebyTypeAndCalories(type, Calories){
  matches = [];
  if (!(typeof type == 'string')){
  matches.push("ERROR: check that first input is a string");
  
  return matches;
  }
   else if (!(typeof Calories == 'number')){
  matches.push("ERROR: check that second input is a number");
  
  return matches;
  }
else{
  i=0;
  while (i<beverageType.length){
    if((beverageType[i].toLowerCase() == type.toLowerCase())){
      // parseFloat() turns number in string form into a number/number from
      if((parseFloat(calories[i]) <= Calories+3)&&(parseFloat(calories[i]) >= Calories-3)){
        matches.push(beverageName[i] +"("+calories[i] + " calories)");
      }
    }   
    i++
  }
if (matches.length == 0){
      matches.push("Name or amount not found");
    }
return matches;
}
}
  
/*
Takes a max caffeine amount as a parameter and returns a list of the beverages that are at or below the max.
maxCaffeineAmount {number} - the preferred max caffeine amount in a drink
return {list} - the list of all beverages at or below the max caffeine amount
*/
function beveragesBelowMaxCaffeine(maxCaffeineAmount){
  var matchingCaffeineBeverages = [];
  if (!(typeof maxCaffeineAmount == 'number')){
  matchingCaffeineBeverages.push("ERROR: check that input is a number");
  
  return matchingCaffeineBeverages;
  }
else{
  for (var i = 0; i < caffeineMg.length; i++){
    if (parseFloat(caffeineMg[i]) <= maxCaffeineAmount){
      matchingCaffeineBeverages.push(beverageName[i]);
    } 
  }
  if(matchingCaffeineBeverages.length == 0){
     matchingCaffeineBeverages.push("All beverages are above preferred max caffeine amount");
  }
  return matchingCaffeineBeverages;
}
}

/*
Takes a beverage as a parameter and returns a list of the beverages whose names include the parameter string and that are sugar free
beverage {string} - the preferred beverage
return {list} - the list of all beverages from different brands of the preferred beverage that are sugar free
*/
function getSugarFreeChoices(beverage){
var matches = [];
  if (!(typeof beverage == 'string')){
  matches.push("ERROR: check that input is a string");
  
  return matches;
  }
else{
//loop until i is not less than the length of the lsit beverageName
  for (var i = 0; i < beverageName.length; i++){
    //if the beverage name (in all lowecase) includes the prameter, beverage's string (in all lowecase) and is sugar free then add the beverage name to the list, matches,
  if((beverageName[i].toLowerCase().includes(beverage.toLowerCase()))&&(sugarFree[i] == "TRUE")){
        matches.push(beverageName[i]);
      }
  }
  //If the length of the list, matches, equals one after the loop then add the string "No sugarfree beverages match your beverage choice"
if(matches.length == 0){
     matches.push("No sugarfree beverages match your beverage choice");
  }
  return matches;
  }
}