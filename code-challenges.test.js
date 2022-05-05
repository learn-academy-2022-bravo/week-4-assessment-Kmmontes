// // ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// // const { arrayExpression } = require("@babel/types")

// // // Please read all questions thoroughly
// // // Pseudo coding is REQUIRED
// // // If you get stuck, please leave comments to help us understand your thought process

// // // Use test driven development to complete the following questions
// // // Add appropriate dependencies: $ yarn add jest

// // // Reminder: The test will call your function
// // // Run the file with the following command: $ yarn jest


// // // --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// // // a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// // const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// // const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


describe ("shuffArr", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
      expect(shuffArr(colors1)).toEqual(expect.arrayContaining(colors1));
      expect(shuffArr(colors2)).toEqual(expect.arrayContaining(colors2));

    })
  })

// //   ReferenceError: shuffArr is not defined

// // b) Create the function that makes the test pass.

// // PSEUDO CODE 
// // I will use  a built in method .shift() to remove the first item from the array
// // I use the shuffle method to shuffle the arrays remaining content
// to shuffle my array, I declare my const shuffledArray , then i sort it .sort method to include a 50/50 chance it will randomize my shuffles length
// // I will use 0.5 chance of getting an equal chance at a randomized number



const shuffArr = (array)=>{
      array.shift();
      const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
      return shuffledArray
}
// // PASS  ./code-challenges.test.js
// // // shuffArr
// //   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)

// // Test Suites: 1 passed, 1 total
// // Tests:       1 passed, 1 total
// // Snapshots:   0 total
// // Time:        0.167 s
// // Ran all test suites.
// // ✨  Done in 0.81s.


// // --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// // a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


describe ("minmaxArr", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        const nums2 = [109, 5, 9, 67, 8, 24]
      expect(minmaxArr(nums1)).toEqual[-8, 90]
      expect(minmaxArr(nums2)).toEqual[5, 109]

    })
  })

// //   ReferenceError: minmaxArr is not defined


// // b) Create the function that makes the test pass.

// // PSEUDO CODE 
// Create a function that takes in an array  of min and max numbers and return in that order.
// first you take out the min value of the array with math.min and same for max.min for max value
// then we will ask for a new empty array
// then we will push the new values we recieved with .push(min) and .push(max) in to the newarray waiting for values
// then we ask for the new array with the new values



const minmaxArr =(array) =>{
    min=Math.min(array)
    max=Math.max(array)
    let newarray = []
    newarray.push(min) 
    newarray.push(max)
    return newarray
}
// // PASS  ./code-challenges.test.js
// // minmaxArr
// //   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order. (1 ms)

// // Test Suites: 1 passed, 1 total
// // Tests:       1 passed, 1 total
// // Snapshots:   0 total
// // Time:        0.158 s
// // Ran all test suites.
// // ✨  Done in 0.74s.




// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



describe ("oneArr", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
      expect(oneArr(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1]);


    })
  })

// //   ReferenceError: oneArr is not defined

// // b) Create the function that makes the test pass.
// // 

// PSEUDO Code
// Create a function that takes in 2 arrays as arguments and returns one array with no duplicate values
// pass array 1 and array 2 as parameters in order to call them later
// call array1 to set the new values with ...new Set spread operator because it allows to expand our values of two arrays in to one array with out repeating or duplicate values
// then we use the spread operator in array1 and array2 to expand and not repeat previously mentioned values so we dont have duplicates (I hope I am explaining this right)
// Then I ask to return array1 as my new array
// I received help with this question, I am not sure I am understanding ... spread operator system fully or explaining it correctly

const oneArr = (array1, array2)=>{
    array1 = [...new Set([...array1, ...array2])]

return array1
}

// PASS  ./code-challenges.test.js
// oneArr
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.146 s, estimated 1 s
// Ran all test suites.

