// Write a JavaScript function that accepts a string as a parameter and counts 
// the number of vowels (a, e, i, o, u) in the string using recursion.
function countVowels(str, index = 0, count = 0) {
    // Base case: if the index exceeds the length of the string, return the count
    if (index >= str.length) {
        return count;
    }
    
    // Check if the current character is a vowel and increment count accordingly
    if ('aeiou'.includes(str[index].toLowerCase())) {
        count++;
    }
    
    // Recursive case: continue counting vowels in the rest of the string
    return countVowels(str, index + 1, count);
}

// Test the function
let inputString = 'Hello World';
let result = countVowels(inputString);
console.log('Number of vowels:', result); // Output: 3


// Task 1: Reverse a String
// Write a function that reverses a string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test
console.log(reverseString("hello")); // Output: "olleh"


// Task 2: Check if Palindrome
// Write a function that checks whether a given 
// string is a palindrome (reads the same backward as forward).
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Test
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false


// Task 3: Find the Largest Number in an Array
// Write a function that finds the largest number in an array.
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Test
console.log(findLargest([3, 7, 2, 10])); // Output: 10


// 4. Task: Calculate Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Test
console.log(factorial(5)); // Output: 120 (5*4*3*2*1)


// Task 5: Fibonacci Series
// Write a function to generate the Fibonacci series 
// up to a certain number of terms.
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Test
console.log(fibonacci(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]


// Task 6: Capitalize Words
// Write a function that accepts a string and 
// capitalizes the first letter of each word in the string.
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Test
console.log(capitalizeWords("hello world")); // Output: "Hello World"


// Task 7: Remove Duplicates
// Write a function that removes duplicate elements from an array.
function removeDuplicates(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}

// Test
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


//Task 8 : Check Prime Number
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Test
console.log(isPrime(17)); // Output: true
console.log(isPrime(15)); // Output: false

// Task 9: Count Vowels
// Write a function that counts the number of vowels in a given string.
function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

// Test
console.log(countVowels("hello")); // Output: 2
