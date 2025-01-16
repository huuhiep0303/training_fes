// Math object 
// Math.PI 

// Date object: is a class, 
// const date = new Date(); // -> tao 1 instance 
// console.log(date); 
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getDay());

function check(date) {
    if (date < 10) return "0" + date;
    return date;
}
console.log("Bai 1");
// h:m:s d/m/y
function showTime() {
    const date = new Date();
    let h = date.getHours(); h = check(h); 
    let ms = date.getMinutes(); ms = check(ms);
    let s = date.getSeconds(); s = check(s); 
    let d = date.getDate(); d = check(d);
    let m = date.getMonth()+1; m = check(m);
    let y = date.getFullYear();
    return `${h}:${ms}:${s} ${d}/${m}/${y}`;
}
console.log(showTime());

console.log("Bai 2");
function getTime2() {
    const day = new Date();
    let d = day.getDate(); d = check(d); 
    let m = day.getMonth()+1; m = check(m); 
    let y = day.getFullYear();
    console.log(`${m}-${d}-${y}`,  `${m}/${d}/${y}`, `${d}-${m}-${y}`);
}
getTime2();

console.log("B3")
function checkIncreasing(number) {
    // chuyen number thanh string
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


console.log("B4")
// change string, next character
let str_replace = "abcdgm"
function changeString(str) {
    let newStr = "";
    for (let i=0; i<str_replace.length; i++) {
        let ascii = str_replace.charCodeAt(i);
        ascii++;
        newStr += String.fromCharCode(ascii);
    }
    return newStr;
}
console.log(changeString(str_replace));


console.log("B5")
// create center substring
let str_center = "abcdefg";
function centerSubstring(str) {
    if (str.length < 3 || str.length % 2 === 0) {
        return false;
    }
    let length = str.length;
    let mid = Math.floor(length / 2);
    let newStr = str[mid - 1] + str[mid] + str[mid + 1];
    return newStr;
}
console.log(centerSubstring(str_center)); 


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


console.log("Bai 8");
function getMonthName(month) {
    const monthArray = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    return monthArray[month-1];
}
month = prompt("Nhập tháng cần kiểm tra: ");
console.log(getMonthName(month));

// const date = new Date();
// console.log(date.getVarDate);


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

console.log("Bai 10")
// find prime number between a and b
function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
let a = parseInt(prompt("Nhập giá trị a: "), 10);
let b = parseInt(prompt("Nhập giá trị b: "), 10);
if (isNaN(a) || isNaN(b)) {
    console.log("Giá trị a và b phải là số.");
} else {
    if (a > b) [a, b] = [b, a]; 
    let arr = [];
    let cnt = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            arr.push(i);
            cnt++;
        }
    }
    console.log(arr);
    console.log(`Prime number: ${cnt}`);
}


