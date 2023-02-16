//create an array named ages containing values 3,9,23,64,2,8,28,93
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //ages array

ages[ages.length - 1]; //locating the last index element in the array
ages[0];                // locating the first index element

console.log((ages[ages.length -1]) - (ages[0])); //printing result of last index element minus first index element

ages.push(30); //adding a new element to the array
console.log(ages);
console.log(ages[ages.length - 1] - (ages[0])); //expected outcome 27


function findAverage(ages){ //write function that takes ages

    let average = 0; //create variable to hold average

    for (let i = 0; i < ages.length; i++){//loop through the array
        average += ages[i]; //statment to calculate average
    }

    average = average / ages.length //divide by the length
    return average;//return variable
}
console.log(findAverage(ages)); //call on function 




let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //names array

function findNameAverage(names){ //write function with names as the parameter

    let average = 0 //create variable to hold average

    for (let x = 0; x < names.length; x++){ //loop through array
    average += names[x].length; //statemnt to calculate average characters
    }

    average = average / names.length // divide by length
    return average; //return variable
}
console.log(findNameAverage(names)); // call on function, expected outcome 3.83



 for (f = 0; f < names.length; f++) { //for loop with variable f

    f = names.join (' '); //f equal to names array, concantenated with spaces between

    console.log(f); // printing f
 }



 var namesLength = [ ] //declaring namesLength array

 for(x=0; x < names.length; x++){ //for loop to iterate through names array

    namesLength.push(names[x].length); //adding the character values from names array to nameslength

 } console.log(namesLength); //printing new array



 
function sumNames(namesLength) { //create function sumNames with namesLength as the parameter

    let sum = 0  //initializing sum to zero

    for(let i = 0; i < namesLength.length; i++){ //for loop to iterate through values of array

        sum += namesLength[i]; //iterate through each value add to previous sum
    }

    return sum; //return sum
}

console.log(sumNames(namesLength)); //call function and give array values



var word = "yogurt"; //declaring word variable
var n = 5;          // declaring n variable

function helloFunction (word, n){ //function helloFunction 
    
  for (i=0; i <= n; i++) { //setting temporary variable i compared to n
   var repeatWord = word.repeat(i); //creating variable repeatWord to be what is input for word repeated i amount of times
     }

    return (repeatWord); //return repeat word
}

console.log(helloFunction (word, n)); // calling function, expected output, yogurtyogurt



var firstName = "Peetah"; //create variable firstName equal to an empty string
var lastName = "Griffin"; //creat variable lastName equal to an empty string

function fullName (firstName, lastName){ //create function fullName with parameters firstName and lastName

    var combineNames = firstName.concat(" ", lastName); //create variable combineNames equal to the concatenation of the parameters seperated by a space

    return combineNames ; //return combineNames
} 

console.log(fullName(firstName, lastName)); //calling on function, expected output, Peetah Griffin



var numbersArray = [20,300,50,77,20,600]; //declare variable numbersArray 

function arrayAverage (numbersArray){ //create function arrayAverage with numberArray as the parameter

    var arrayyAverage = 0; //create empty variable arrayAverage

    for(i = 0; i < numbersArray.length; i++){ //for loop to iterate through numbersArrays
        arrayyAverage += numbersArray[i];  //adding the values of numbersArray elements to arrayAverage
    }

    arrayyAverage = arrayyAverage / numbersArray.length; //divding by length to get average

    if (arrayyAverage < 100){ //if statement for if arrayAVerage is less than 100 to print false
        return false;
    } else {   //else print true
       return true;
   }
    
   return arrayyAverage; //return arrayAverage
}
console.log(arrayAverage(numbersArray)); //calling function, expected outcome, true



var nummies = [1, 3, 5, 7, 9]; //create nummies array 

function avNummies (nummies){ //function avNummies with parameter nummies

    var arrAvNummies = 0; //empty variable arrAvNummies

    for (i=0; i < nummies.length; i++){ //for loop to iterate through nummies array
        arrAvNummies += nummies[i]; //adding values of nummies array to arrAvNummies variable
    }

    arrAvNummies = arrAvNummies / nummies.length ; //dividing by nummies length to get the average
    return arrAvNummies; // returning our variable that holds the average
}

console.log(avNummies(nummies)); //calling on function, expected output, 5



function twoArrays (numbersArray, nummies){ //function twoArrays with numbersArray and nummies as the parameter

    var arrraayAverage = 0; //create empty variable arrrayAverage

    for(i = 0; i < numbersArray.length; i++){ //for loop to iterate through numbersArrays
        arrraayAverage += numbersArray[i];  //adding the values of numbersArrray elements to arrayAverage
    }
    arrraayAverage = arrraayAverage / numbersArray.length; //calculating average
    console.log(arrraayAverage); //printing average, expected outcome, 6.5

    var arAvNummies = 0; //empty variable arAvNummies

    for (i=0; i < nummies.length; i++){ //for loop to iterate through nummies array
        arAvNummies += nummies[i]; //adding values of nummies array to arAvNummies variable
    }
    arAvNummies = arAvNummies / nummies.length ; //calculating average 
    console.log(arAvNummies); //printing average, expected outcome, 6.333333...

    if (arrraayAverage > arAvNummies){ //if statement to check if arrraayAverage is greater than arAvNummies
        return true; //if condition is met return true
    } else {
        return false; //else return false
    }
}

console.log(twoArrays(numbersArray, nummies)); //calling on function, expected outcome, true



var isHotOutside = true; //var isHotOutside set to a boolean value
var moneyInPocket = 13; //var moneyInPocket set to a numerical value

function willBuyDrink (isHotOutside, moneyInPocket){ //function willBuyDrink with parameters isHotOutside and moneyInPocket

    if (isHotOutside == true && moneyInPocket > 10.50){ //conditional isHotOutSide must be equal to true and MoneyInPocket must be greater than 10.50
        return true; //if condition is met return true
    } else {
        return false; //else return false
    }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));//call function, expected outcome, false



var amountOfCats = 8;  //number of cats expected
var foodCost = 30;      //cost of food
var litterCost = 20;    //cost of litter


function isItTooManyCats (amountOfCats){ //function isTooManyCats with parameter amountOfCats

    var totFoodCost = 0     //empty variable to hold total cost of food
    var totLitterCost = 0   ///empty vairable to hold total cost of litter
    
     //if 1 cat
    if (amountOfCats == 1) { 
        totFoodCost = foodCost * amountOfCats; //fixed cost of one cat
        totLitterCost = litterCost * amountOfCats; //fixed cost of one cat
    }
    //if more than 1 cat
    if ( amountOfCats > 1){
         totFoodCost = (foodCost * (amountOfCats * .2)) + foodCost; //calculates a 20% food cost increase per cat 
         totLitterCost = (litterCost * (amountOfCats * .75)) + litterCost; //calculates a 75% litter cost increase per cat
            
    }
    
    console.log("If you have " + amountOfCats + " cats" + " Then the cost of food will be $" + totFoodCost + " and the cost of litter will be $" + totLitterCost +"."); //prints the amount of cats and expected cost for food and litter
    
    return ;

} isItTooManyCats(amountOfCats); //calling function

//**Please ignore, not part of assignment **console.log(isItTooManyCats(amountOfCats)); // OUTPUT TO THE SCREEN

//avg = 0
//avg = isItTooManyCats(amountOfCats) // return value get stored into avg
//console.log(avg) // 78

//amountOfCats = 5
//avg = isItTooManyCats(amountOfCats) // return value get stored into avg
//console.log(avg) // 60 **not part of assignment**


//I made the function above with the quote "How many cats are too many cats?" in mind. Someone gifted my
//roommate a sign with this quote on it and everyday it nags me as I stare at it while 
//making my morning coffee. So here I have created the funtion isItTooManyCats to answer 
//the question from a financial point of view. Being college students, the finacial aspect seems to be the 
//most resonable view to look at it from. I find that the most costly part of having a
//cat is the food and litter, so I have choosen those, as well as, amount of cats as 
//the variables. I've set amountOfCats as the parameter of my function. Then within the 
//function I have created equations to calculate the total costs of food and litter for 
//the desired amount of cats. I have set the main 3 variables outside of the function so 
//to make the function more dynamic.
//Now to give it some html formatting and my roomates can
//easily figure out if they can really afford that fourth cat. 