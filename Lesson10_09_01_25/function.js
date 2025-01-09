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

console.log("Bai 3");
function getMonthName(month) {
    const monthArray = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    return monthArray[month-1];
}
month = prompt("Nhập tháng cần kiểm tra: ");
console.log(getMonthName(month));

const date = new Date();
console.log(date.getVarDate);