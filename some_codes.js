//Write a function that flattens a nested array.
function flattenArray(arr) {

    //return arr.flat().flat();
    while (true){
    arr =  arr.flat();
     var isNotFlat = false;
 
     for (var i=0; i<arr.length; i++)
         if (Array.isArray(arr[i])) {
             isNotFlat = true;
             break;
     }
 
     if (isNotFlat == false) return arr;
 
    } 
 }
 
 // Test
 console.log(flattenArray([1, [2, [3, 4], 5], 6]));

 // tASK 1
//  Write a JavaScript program to find the most frequent item in an array.
// Sample array : let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
function findMostFrequentItem(arr) {
    // Create an empty object to store the frequency of each item
    let frequencyCounter = {};

    // Iterate through the array and count the frequency of each item
    arr.forEach(item => {
        // If the item is not in the frequency counter, initialize it with a count of 1
        if (!frequencyCounter[item]) {
            frequencyCounter[item] = 1;
        } else {
            // If the item is already in the frequency counter, increment its count
            frequencyCounter[item]++;
        }
    });

    // Initialize variables to keep track of the most frequent item and its count
    let mostFrequentItem;
    let maxFrequency = 0;

    // Iterate through the frequency counter object to find the most frequent item
    for (let item in frequencyCounter) {
        if (frequencyCounter[item] > maxFrequency) {
            mostFrequentItem = item;
            maxFrequency = frequencyCounter[item];
        }
    }

    // Return the most frequent item and its count
    return `${mostFrequentItem} (${maxFrequency} times)`;
}

// Sample array
let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Output the result
console.log(findMostFrequentItem(arr1)); // Output: a (5 times)

// tASK 2
//  Write a simple JavaScript program to join all elements of the 
// following array into a string.
// Sample array
let myColor = ["Red", "Green", "White", "Black"];

// Joining elements with comma
let commaSeparated = myColor.join(",");
console.log(commaSeparated); // Output: Red,Green,White,Black

// Joining elements with plus sign
let plusSeparated = myColor.join("+");
console.log(plusSeparated); // Output: Red+Green+White+Black

// TASK 3
// Write a JavaScript program to remove duplicate 
// items from an array (ignore case sensitivity).
function removeDuplicatesIgnoreCase(arr) {
    // Convert all elements to lowercase to ignore case sensitivity
    let lowerCaseArr = arr.map(item => item.toLowerCase());

    // Use Set to store unique elements
    let uniqueItemsSet = new Set(lowerCaseArr);

    // Convert Set back to an array
    let uniqueItemsArray = Array.from(uniqueItemsSet);

    // Convert back to original case if needed
    let result = uniqueItemsArray.map(item => {
        // Find the index of the lowercase item in the original array
        let index = lowerCaseArr.indexOf(item);
        // Return the corresponding item from the original array
        return arr[index];
    });

    return result;
}

// Sample array with duplicate items
let arr = ['Apple', 'Banana', 'apple', 'Orange', 'banana', 'Grapes'];

// Call the function to remove duplicates ignoring case sensitivity
let result = removeDuplicatesIgnoreCase(arr);

// Output the result
console.log(result); // Output: ['Apple', 'Banana', 'Orange', 'Grapes']


// TASK 4
// Write a JavaScript function that returns a string that has letters in alphabetical order.
//  'webmaster'
//  'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// Version 1
function sortStringAlphabetically(str) {
    // Convert the string to an array of characters
    let charArray = str.split('');

    // Sort the array alphabetically
    charArray.sort();

    // Join the sorted characters back into a string
    let sortedStr = charArray.join('');

    return sortedStr;
}

// Test the function
let inputString = 'webmaster';
let result_1 = sortStringAlphabetically(inputString);
console.log(result_1); // Output: abeemrstw

// Version 2
function sortStringAlphabetically(str) {
    // Remove non-letter characters using a regular expression
    let lettersOnly = str.replace(/[^a-zA-Z]/g, '');

    // Convert the string to an array of characters
    let charArray = lettersOnly.split('');

    // Sort the array alphabetically
    charArray.sort();

    // Join the sorted characters back into a string
    let sortedStr = charArray.join('');

    return sortedStr;
}

// Test the function
let inputString_1 = 'w1eb2ma3ster';
let result_2 = sortStringAlphabetically(inputString_1);
console.log(result_2); // Output: abeemrstw


// Task 5
// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// : 'Web Development Tutorial'
//  'Development'
function findLongestWord(str) {
    // Split the string into an array of words
    let words = str.split(' ');

    // Initialize variables to store the longest word and its length
    let longestWord = '';
    let maxLength = 0;

    // Iterate through each word to find the longest one
    for (let i = 0; i < words.length; i++) {
        // Remove any non-letter characters from the word using regex
        let word = words[i].replace(/[^a-zA-Z]/g, '');

        // If the current word is longer than the previous longest word, update the variables
        if (word.length > maxLength) {
            longestWord = word;
            maxLength = word.length;
        }
    }

    return longestWord;
}

// Task 6
// Write a JavaScript function that accepts a number as a 
// parameter and checks whether it is prime or not using recursion.
// Note : A prime number (or a prime) is a natural 
// number greater than 1 that has no positive divisors other than 1 and itself.
// Test the function
let inputString_3 = 'Web Development Tutorial';
let result_3 = findLongestWord(inputString_3);
console.log(result_3); // Output: Development



function isPrime(num, divisor = 2) {
    // Base cases
    if (num <= 1) {
        return false;
    }
    if (divisor * divisor > num) {
        return true;
    }
    if (num % divisor === 0) {
        return false;
    }

    // Recursive case
    return isPrime(num, divisor + 1);
}

// Test the function
let number = 17;
if (isPrime(number)) {
    console.log(number + ' is prime.');
} else {
    console.log(number + ' is not prime.');
}
