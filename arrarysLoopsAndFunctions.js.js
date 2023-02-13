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
        let currentNum = ages[i]; //add empty vairable to each index
        average += currentNum;
    }
    average = average / ages.length //divide by the length
    return average;//return variable
}
console.log(findAverage([3, 9, 23, 64, 2, 8, 28, 93])); //call on function 