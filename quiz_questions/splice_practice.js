// //Created arrays
// let Array = [3, 5, 7, 9]
// let weekDays = ["Monday", "Wednesday", "Thursday", "Friday"]

// console.log(Array[0]) //printed out the first index of the number array
// console.log(weekDays.length) //printed the length of the string array
// console.log(weekDays)//prints all the values in array

// weekDays.splice(1,0,"Tuesday") //adding in tuesday with the splice function

// console.log(weekDays) //prints with Tuesday added

//array of fruits
let fruits = ["apples", "pineapple", "pear", "strawberries", "star fruit"]
let randomIndex = Math.floor(Math.random()* fruits.length) //variable for generating a different index each time

console.log(`random index: ${randomIndex}`) //calls the index to place new value in
fruits.splice(randomIndex,0,"Durian") //the value which will be placed in the array
console.log(fruits) //printing out array with the new value

