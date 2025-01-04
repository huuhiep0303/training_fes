console.log("B3")
function checkIncreasing(number) {
    const str = number.toString();
    // console.log(str);
    for (let i=0; i<str.length; i++) {
        if (str[i] >= str[i+1]) {
            return false;
            break;
        }
    }
    return true;
}
const num = 123;
// const number = prompt("Enter a number: ");
// const num = Number(number);
(checkIncreasing(num)) ? console.log("true") : console.log("false")


console.log("B6")
const Arr = [1,3,1,5,2]
function findMaxApearance(Arr) {
    let max=0, index=-1;
    for (let i=0; i<Arr.length-1; i++) {
        let count = 1;
        for (let j=i+1; j<Arr.length; j++) {
            if (Arr[i] == Arr[j]) {
                count++;
            }
        }
        if (count > max) {
            max = count;
            index=i;
        }
    }
    return Arr[index]
}
console.log(findMaxApearance(Arr));

console.log("B7")
let str = "learnjavascript"
function findSubsequence(str) {
    let substr = str.indexOf("java")
    if (substr == -1) {
        return false;
    } else {
        // console.log(substr);
        return true;
    }
}
(findSubsequence(str)) ? console.log("true") : console.log("false");

console.log("B9")
let string = "learn javascript in today"
function findLongestSubsequence(string) {
    let substr=string.split(" ");
    // console.log(substr);
    let max=0;
    let longestSubstr = ""
    for (let i=0; i<substr.length; i++) {
        if (substr[i].length > max) {
            max = substr[i].length;
            longestSubstr = substr[i];
        }
    }
    return longestSubstr;
}
console.log(findLongestSubsequence(string));