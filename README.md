# **Beverages Nutrition Library**
A library of five functions that report various information about a beverage dataset.

#

**Returns a list of beverages that match a preferred beverage type**

@param type {string} - the desired type of beverage

@return {list} - the list of matching beverages

function beveragesByType(type)

#

**Returns a list of the beveragres taht are at or below a preferred max caffeine amount**

@param maxCaffeineAmount {number} - the preferred max caffeine amount in one drink

@return {list} - the list of all beverages at or below the max caffeine amount

function beveragesBelowMaxCaffeine(maxCaffeineAmount)

#

**Returns a list of different brands of a desired beverage and their sugar counts**

@param beverage {string} - the desired beverage

@return {list} - the list of matching beverages and their sugar counts

function sugarCount(beverage)

#

**Returns a list of beverages that match the preferred beverage type and whose calories are within a range of 3 above or 3 below the preferred calorie amount**

@param type {string} - the desired beverage type

@param Calories {number} - the desired amount of calories in one drink

@return {list} - the list of matching beverages and their calorie counts

function getBeveragebyTypeAndCalories(type, Calories)

#

**Returns a list of the beverages whose names include the preferred beverage and that are sugar free**

@param beverage {string} - the preferred beverage
@return {list} - the list of all beverages from different brands of the preferred beverage that are sugar free

function getSugarFreeChoices(beverage)
