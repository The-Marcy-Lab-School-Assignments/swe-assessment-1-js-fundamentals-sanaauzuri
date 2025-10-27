/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  // Your code here
  if (petBreed && petName === undefined) {
    console.log('Missing information. Please provide a valid pet.')
  } else if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`)
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`)
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`)
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`)
  } else {
    console.log('What an...interesting pet.')
  }
};
// petJudger('dog', 'frida'); // Prints "I love dogs! frida is so cute!"
// petJudger('panda', 'joe'); // Prints "What an...interesting pet."
// petJudger('panda'); // Prints "Missing information. Please provide a valid pet."

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  // Your code here
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i)
  } 
};
// loopFromOneUpToAnother(1, 5); // Prints on separate lines 1 2 3 4
// loopFromOneUpToAnother(5, 10); // Prints on separate lines 5 6 7 8 9
// loopFromOneUpToAnother(1, 1); // Prints nothing
// loopFromOneUpToAnother(5, 1); // Prints nothing

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // Your code here
  for (let i = 0; i < str.length; i++) {
    const newStr = str(i).toUpperCase
    console.log(`${newStr}`)
  }
};
/* Correct Examples: */
// shoutEveryLetterForLoop('hey');
// // H!
// // E!
// // Y!

// shoutEveryLetterForLoop('');
// // ============================================
// // Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  // Your code here
  for (let i = 0; i < str.length; i++) {
    let newStr = str[i]
    return newStr
  } if (newStr === newStr.toLowerCase()) {

  }
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  // Your code here
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
