/*1.	You are given two numbers. Write a program that finds the sum, difference, product, and quotient of the two numbers and displays the results on a web page.

Given input:2,4.
Expected output:Sum: 6, Difference: -2, Product: 8, Quotient: 0.5

2.	You are given a string. Write a program that checks if the string is a palindrome (i.e., the string reads the same backward as forward) and displays the result on a web page.

Given input:ABCDCBA.
Expected output:The string is a palindrome.

3.	You are given an array of numbers. Write a program that finds the average of the numbers and displays the result on a web page.

Given input:2,3,4,5
Expected output:The average is 3.5.

4.	You are given a list of items. Write a program that randomly selects an item from the list and displays it on a web page.

Given input:Apple, Banana, Orange, Grape, Mango
Expected output:When you click submit button,it randomly selects an item from the list.

5.	You are given a string. Write a program that counts the number of vowels in the string and displays the result on a web page.

Given input:Skill safari
Expected Output:Number of vowels: 4

6.	You are given an array of numbers. Write a program that finds the median of the numbers and displays the result on a web page.

Given input:2,5,7,1,45,8,7
Expected Output:Median: 7

7.	You are given two strings. Write a program that checks if the two strings are anagrams (i.e., the two strings have the same characters but in a different order) and displays the result on a web page.

Given input:Skill safari
Expected output:The strings are not anagrams.

8.	You are given an array of numbers. Write a program that finds the largest and smallest odd numbers in the array and displays the results on a web page.

Given input:2,4,5,7,2,3
Expected output:Largest odd number: 7, Smallest odd number: 3

9.	You are given a list of items. Write a program that removes all duplicates from the list and displays the result on a web page.

Given input:apple, banana, cherry, apple, date, banana, elderberry
Expexted Output:apple,banana,cherry,,date,elderberry

10.	You are given a number. Write a program that checks if the number is a prime number (i.e., only divisible by 1 and itself) and displays the result on a web page.

Given input:61
Expected output:61 is a priime number*/

//1.	You are given two numbers. Write a program that finds the sum, difference, product, and quotient of the two numbers and displays the results on a web page.

// Given input:2,4.
// Expected output:Sum: 6, Difference: -2, Product: 8, Quotient: 0.5

function performOperations() {
  // Get the input values from the textboxes
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);

  // Calculate the results
  var sum = num1 + num2;
  var difference = num1 - num2;
  var product = num1 * num2;
  var quotient = num1 / num2;

  // Display the results in the result div
  document.getElementById('result').innerHTML =
    'Sum: ' +
    sum +
    '<br>Difference: ' +
    difference +
    '<br>Product: ' +
    product +
    '<br>Quotient: ' +
    quotient;
}

// 2.	You are given a string. Write a program that checks if the string is a palindrome (i.e., the string reads the same backward as forward) and displays the result on a web page.

// Given input:ABCDCBA.
// Expected output:The string is a palindrome.
function checkPalindrome() {
  var inputString = document.getElementById('inputString').value;
  var reversedString = inputString.split('').reverse().join('');

  if (inputString === reversedString) {
    document.getElementById('result').innerHTML = 'The string is a palindrome.';
  } else {
    document.getElementById('result').innerHTML =
      'The string is not a palindrome.';
  }
}

//You are given an array of numbers. Write a program that finds the average of the numbers and displays the result on a web page.

// Given input:2,3,4,5
// Expected output:The average is 3.5.

function calculateAverage() {
  var inputArray = document.getElementById('inputArray').value;
  var numbers = inputArray.split(',').map(function (num) {
    return parseFloat(num.trim());
  });

  var sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  var average = sum / numbers.length;

  document.getElementById('result').innerHTML =
    'The average is ' + average.toFixed(2);
}

// 4.	You are given a list of items. Write a program that randomly selects an item from the list and displays it on a web page.

// Given input:Apple, Banana, Orange, Grape, Mango
// Expected output:When you click submit button,it randomly selects an item from the list.
// List of items
var items = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];

// Function to select a random item
function selectRandomItem() {
  // Generate a random index within the range of the list length
  var randomIndex = Math.floor(Math.random() * items.length);

  // Get the item at the randomly generated index
  var randomItem = items[randomIndex];

  // Display the selected item on the web page
  document.getElementById('result').innerHTML =
    'Randomly selected item: ' + randomItem;
}

// 5.	You are given a string. Write a program that counts the number of vowels in the string and displays the result on a web page.

// Given input:Skill safari
// Expected Output:Number of vowels: 4
function countVowels() {
  var input = document.getElementById('inputString').value.toLowerCase();
  var vowelCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      vowelCount++;
    }
  }

  document.getElementById('result').textContent =
    'Number of vowels: ' + vowelCount;
}

// 6.	You are given an array of numbers. Write a program that finds the median of the numbers and displays the result on a web page.

// Given input:2,5,7,1,45,8,7
// Expected Output:Median: 7

function calculateMedian() {
  // Get the input value from the text field
  var input = document.getElementById('numbersInput').value;

  // Split the input string into an array of numbers
  var numbers = input.split(',').map(function (num) {
    return parseInt(num);
  });

  // Sort the numbers in ascending order
  numbers.sort(function (a, b) {
    return a - b;
  });

  // Calculate the median
  var median;
  var middleIndex = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    median = (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  } else {
    median = numbers[middleIndex];
  }

  // Display the result on the web page
  document.getElementById('result').innerHTML = 'Median: ' + median;
}

// 7.	You are given two strings. Write a program that checks if the two strings are anagrams (i.e., the two strings have the same characters but in a different order) and displays the result on a web page.

// Given input:Skill safari
// Expected output:The strings are not anagrams.

function checkAnagram() {
  var str1 = document.getElementById('str1').value.toLowerCase();
  var str2 = document.getElementById('str2').value.toLowerCase();

  // Remove all non-alphabetic characters
  str1 = str1.replace(/[^a-zA-Z]/g, '');
  str2 = str2.replace(/[^a-zA-Z]/g, '');

  // Convert strings to arrays, sort them, and join again
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  // Check if the sorted strings are equal
  if (str1 === str2) {
    document.getElementById('result').textContent = 'The strings are anagrams.';
  } else {
    document.getElementById('result').textContent =
      'The strings are not anagrams.';
  }
}

// 8.	You are given an array of numbers. Write a program that finds the largest and smallest odd numbers in the array and displays the results on a web page.

// Given input:2,4,5,7,2,3
// Expected output:Largest odd number: 7, Smallest odd number: 3

function findOddNumbers() {
  var numbers = document.getElementById('numbersInput').value.split(',');
  var largestOdd = null;
  var smallestOdd = null;

  for (var i = 0; i < numbers.length; i++) {
    var num = parseInt(numbers[i]);

    if (num % 2 !== 0) {
      // Check if number is odd
      if (largestOdd === null || num > largestOdd) {
        largestOdd = num;
      }

      if (smallestOdd === null || num < smallestOdd) {
        smallestOdd = num;
      }
    }
  }

  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML =
    'Largest odd number: ' +
    largestOdd +
    '<br>Smallest odd number: ' +
    smallestOdd;
}

// 9.	You are given a list of items. Write a program that removes all duplicates from the list and displays the result on a web page.

// Given input:apple, banana, cherry, apple, date, banana, elderberry
// Expexted Output:apple,banana,cherry,,date,elderberry
// Given input
function removeDuplicates() {
  var items = [
    'apple',
    'banana',
    'cherry',
    'apple',
    'date',
    'banana',
    'elderberry',
  ];
  var uniqueItems = [...new Set(items)];
  var result = uniqueItems.join(',');

  document.getElementById('outputs').innerHTML = result;
}

// 10.	You are given a number. Write a program that checks if the number is a prime number (i.e., only divisible by 1 and itself) and displays the result on a web page.

// Given input:61
// Expected output:61 is a priime number

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function checkPrime() {
  const input = document.getElementById('number').value;
  const number = parseInt(input);

  if (isPrime(number)) {
    document.getElementById('result').innerHTML = number + ' is a prime number';
  } else {
    document.getElementById('result').innerHTML =
      number + ' is not a prime number';
  }
}
