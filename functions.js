const returnEmptyString = function() {
    return "";
};

const returnZeroNumber = function() {
    return 0;
};

const returnEmptyArray = function() {
    return [];
};

const returnEmptyObject = function() {
    return {};
};

const returnAbcString = function(value) {
    return "abc123";
};

const returnSumOfTen = function(arg1, arg2) {
    return arg1 + arg2;
};

const subtraction = function(arg1, arg2) {
    return arg1 - arg2;
};

const multiplication = function(arg1, arg2) {
    return arg1 * arg2;
};

const division = function(arg1, arg2) {
    return arg1 / arg2;
};

const returnArray = function(arg1) {
    return arg1;
};

const returnFirstIndex = function(arg1) {
    return arg1[0];
};

const returnSecondIndex = function(arg1) {
    return arg1[1];
};

const returnArrayLength = function(arg1) {
    return arg1.length;
};

const arraySum = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

const arraySubtraction = function(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result -= arr[i];
    }

    return result;
};

const multiplicationArray = function(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
};

const divisionArray = function(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result /= arr[i];
    }
    return parseFloat(result.toFixed(3));
};

const oddArray = function(arr) {
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i]);
        }
    }
    return oddNumbers;
};

const evenArray = function(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
};

const returnFruits = function(arr) {
    const inputFruits = arr;
    const validFruits = ['apple', 'banana', 'orange', 'grape', 'strawberry'];
    let filteredFruits = [];
    for (let i = 0; i < inputFruits.length; i++) {
        if (validFruits.includes(inputFruits[i])) {
            filteredFruits.push(inputFruits[i]);
        }
    }
    return filteredFruits;
};