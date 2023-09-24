/** product: calculate the product of an array of numbers.
 *  * @param {[]} nums
 */

function product(nums) {
    if (nums.length === 0) return 1;

    return nums[0] * product(nums.slice(1));
}

// let arr = [10, 20];
// let result = product(arr);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWord = 0) {
    if (idx === words.length) return longestWord;

    if (words[idx].length >= longestWord) {
        longestWord = words[idx].length;
    }
    return longest(words, idx + 1, longestWord);
}

// let arr = ['blah', 'test', 'longest', 'spy'];
// let result = longest(arr);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = '') {
    if (idx >= str.length) return newStr;

    newStr = newStr + str[idx];

    return everyOther(str, idx + 2, newStr);
}

// let str = 'Terry';
// let result = everyOther(str);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0, reverseStr = '') {
    if (idx >= str.length) return str === reverseStr;

    reverseStr = reverseStr + str[str.length - idx - 1];

    return isPalindrome(str, idx + 1, reverseStr);
}

// let someStr = 'Terry';
// let result = isPalindrome(someStr);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
    if (idx === arr.length && val !== arr[idx]) return -1;
    if (val === arr[idx]) return idx;

    return findIndex(arr, val, idx + 1);
}

// let arr = ['blah', 'test', 'longest', 'spy'];
// let result = findIndex(arr, 'soap');
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, reverseStr = '') {
    if (idx >= str.length) return reverseStr;

    reverseStr = reverseStr + str[str.length - idx - 1];

    return revString(str, idx + 1, reverseStr);
}

// let someStr = 'Terry';
// let result = revString(someStr);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    // Partial SB Solution - referred to the solution at the end
    let strArr = [];
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            strArr.push(obj[key]);
        }
        if (typeof obj[key] === 'object') {
            strArr.push(...gatherStrings(obj[key]));
        }
    }
    return strArr;
}

// let someObj = {
//     name: 'Whiskey',
//     age: 5,
//     favFood: 'popcorn',
//     color: 'black',
//     barks: false,
// };
// let result = gatherStrings(someObj);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /** binarySearch: given a sorted array of numbers, and a value,
//  * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, idx = 0) {
    if (idx === arr.length && val !== arr[idx]) return -1;
    if (val === arr[idx]) return idx;

    return binarySearch(arr, val, idx + 1);
}

// let arr = [1, 2, 3, 4];
// let result = binarySearch(arr, 2);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch,
};
