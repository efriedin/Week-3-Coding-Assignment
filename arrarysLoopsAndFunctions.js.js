//create an array named ages containing values 3,9,23,64,2,8,28,93
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //ages array

ages[ages.length - 1]; //locating the last index element in the array
ages[0];                // locating the first index element

console.log((ages[ages.length -1]) - (ages[0])); //printing result of last index element minus first index element

ages.push(30); //adding a new element to the array
console.log(ages[ages.length - 1] - (ages[0])); //expected outcome 27


function findAverage(ages){ //write function that takes ages
    let average = 0; //create variable to hold average
    for (let i = 0; i < ages.length; i++){//loop through the array
        average += ages[i]; //statment to calculate average
    }
    average = average / ages.length //divide by the length
    return average;//return variable
}
console.log(findAverage([3, 9, 23, 64, 2, 8, 28, 93])); //call on function 


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //names array

function findNameAverage(names){ //write function with names as the parameter
    let average = 0 //create variable to hold average
    for (let x = 0; x < names.length; x++){ //loop through array
    average += names[x].length; //statemnt to calculate average characters
    }
    average = average / names.length // divide by length
    return average; //return variable
}
console.log(findNameAverage(['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'])); // call on function, expected outcome 3.83


 for (f = 0; f < names.length; f++) { //for loop with variable f
    f = names.join (' '); //f equal to names array, concantenated with spaces between
    console.log(f); // printing f
 }

 var namesLength = [ ] //declaring namesLength array

 for(i=0; i < names.length; i++){ //for loop to iterate through names array
    namesLength.push(names[i].length); //adding the character values from names array to nameslength
    ;
 } console.log(namesLength); //printing new array
 
function sumNames(namesLength) { //create function sumNames with namesLength as the parameter
    let sum = 0  //initializing sum to zero

    for(let i = 0; i < namesLength.length; i++){ //for loop to iterate through values of array
        sum += namesLength[i]; //iterate through each value add to previous sum
    }
    console.log(sum); // 23
    return sum; //return sum
}

sumNames([3, 5, 3, 5, 4, 3]); //call function and give array values



function helloFunction (word, n){ //function helloFunction 
    
  for (i=0; i <= n; i++) { //setting temporary variable i compared to n
   var repeatWord = word.repeat(i); //creating variable repeatWord to be what is input for word repeated i amount of times
     }
   console.log(repeatWord); //print value of repeat word
    return (repeatWord); //return repeat word
}
helloFunction ("yogurt", 2); // calling function, expected output, yogurtyogurt

var firstName = " "; //create variable firstName equal to an empty string
var lastName = " "; //creat variable lastName equal to an empty string

function fullName (firstName, lastName){ //create function fullName with parameters firstName and lastName
    var combineNames = firstName.concat(" ", lastName); //create variable combineNames equal to the concatenation of the parameters seperated by a space
    console.log(combineNames); //print combineNames
    return combineNames ; //return combineNames
} 

fullName("Peetah", "Griffin"); //calling on function, expected output, Peetah Griffin