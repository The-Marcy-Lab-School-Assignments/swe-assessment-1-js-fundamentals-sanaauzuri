# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1
Response: This block of code throws a undefined variable error.  This error is thrown because the keyword `let` is used to reassign the variable `currentStatus`.  To fix this error, we can call the variable without the `let` keyword to reassign it's value.

### Question 2
Response: The following code logs `Michael Jordan`.

`let bestPlayer = { name: "Lebron James" };`: Assigns the variable 'bestPlayer' to an object with a key called name and a string value. 

`let theGOAT = bestPlayer;`: Sets the variable 'theGOAT' to the variable 'bestPlayer'

`bestPlayer.name = "Michael Jordan";`: Mutated the string value of the object through dot notation

`console.log(theGOAT.name);` : Console logs the new value of bestPlayer by calling on `theGOAT` variable 

### Question 3
Response: The following code logs an error. 

`const theHustler = 'Laisha';` : Creates a variable that cannot be reassigned

`const shoutOut = () => {
  const theHustler = 'Paul';
  console.log(``${theHustler} is the hardest working person in the room.``);
}`: You cannot reassign a constant variable

### Question 4
Response: The purpose of rest parameters is to take in arguements as an array

How do we turn a parameter into a rest parameter and use them in functions?
Illustrate the use of rest parameters by writing a function called sum that takes any number of integers as arguments and returns their sum.
`const sum = (...nums) => {
    let total = 0
    total += num
}`
sum(1, 2, 10); // 13
sum(5); // 5
sum(100, 200, 800, 1, 1, 1); // 1103;


### Question 5

### Question 6


### Question 7


### Question 8

