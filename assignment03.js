console.log("Exercise 1");
function isArithmeticProgression(arr) {
    if (!Array.isArray(arr)) {
        console.log("Please input an array.");
        return false;
    }

    if (arr.length < 2) {
        console.log("Array should have at least two elements for comparison.");
        return false;
    }

    for (const num of arr) {
        if (typeof num !== "number" || isNaN(num)) {
            console.log("Please input only an array of numbers.");
            return false;
        }
    }

    const diff = arr[1] - arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        const temp = arr[i + 1] - arr[i];
        if (diff !== temp) {
            return false;
        }
    }

    return true;
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); 
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); 
console.log(isArithmeticProgression([2, 4, 6, 8])); 
console.log(isArithmeticProgression([2, 6, 18, 54])); 
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); 

console.log("Exercise 2");
 function threeStepsAB(str) {
    if (typeof str !== "string") {
        console.log("Please only input string");
        return false
    }

    target = str.toLocaleLowerCase()
    for (let i = 0; i < target.length-4; i++) {
        if (target[i] == "a" && target[i+4] == "b") {
            return true
        }
        else if (target[i] == "b" && target[i+4] == "a") {
            return true
        }
    }
    return false
 }

console.log(threeStepsAB("lane borrowed"));
console.log(threeStepsAB("I am sick"));
console.log(threeStepsAB("you are boring"));
console.log(threeStepsAB("barbarian"));
console.log(threeStepsAB("bacon and meat"));

console.log("Exercise 3");
function sumArray(arr, int) {
    if (!Array.isArray(arr)) {
        console.log("Please input an array.");
        return false;
    }

    for (const num of arr) {
        if (typeof num !== "number" || isNaN(num)) {
            console.log("Please input only an array of numbers.");
            return false;
        }
    }

    res = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length + 1; j++) {
            if (arr[i] + arr[j] === int) {
                res.push([arr[i], arr[j]])
            }
        }
    }
    console.log(res);
}

sumArray([2, 1, 4, 3], 5)
sumArray([1, 8, 10, 3], 11)

console.log("Exercise 4");
function arrSum(arr) {
    if (!Array.isArray(arr)) {
        console.log("Please input an array.");
        return false;
    }

    for (const num of arr) {
        if (typeof num !== "number" || isNaN(num)) {
            console.log("Please input only an array of numbers.");
            return false;
        }
    }

    let maxSumArr = 0
    let currSumArr = 0
    let start = 0
    let end = 0
    let s = 0

    for (let i = 0; i < arr.length; i++) {
        currSumArr += arr[i]

        if (currSumArr < 0) {
            currSumArr = 0
            s = i + 1
        }

        if (currSumArr > maxSumArr) {
            maxSumArr = currSumArr
            start = s
            end = i
        }
    }

    console.log([arr.slice(start, end+1), maxSumArr]);
}

arrSum([-2, -3, 4, -1, -2, 1, 5, -3])