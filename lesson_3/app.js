//Конвертер чисел

// let clientNumber = Number(prompt("Enter a number from 1 to 9"));
// // clientNumber = Number(clientNumber);
// let finalNumber = "";
//
//
// // DRY - Don't repeat yourself
//
// if (clientNumber === 1) {
//     finalNumber = "I";
// } else if (clientNumber === 2) {
//     finalNumber = "II";
// } else if (clientNumber === 3) {
//     finalNumber = "III";
// } else if (clientNumber === 4) {
//     finalNumber = "IV";
// } else if (clientNumber === 5) {
//     finalNumber = "V";
// } else if (clientNumber === 6) {
//     finalNumber = "VI";
// } else if (clientNumber === 7) {
//     finalNumber = "VII";
// } else if (clientNumber === 8) {
//     finalNumber = "VIII"
// } else if (clientNumber === 9) {
//     finalNumber = "IX";
// }
//
// // falsy: 0, NaN, "", null, undefined, false
// if(finalNumber){
//     window.alert("Your number is:" + finalNumber);
// }else {
//     window.alert("operation is impossible");
// }
//
// let color = "red";
// let result;
//
// if(color === 'red'){
//     result = "STOP";
// }

// Array - массив
// List - список
let numbers = [1,2,3,4,5,6,7,8,9];
// Indexes:               0 1 2 3 4 5 6 7 8

let falsyValues = [false, 0, NaN, "", '', ``, null, undefined];

console.log(falsyValues[6]);

console.log("Array of numbers (true array):", numbers);

console.log("Array of falsy values (not true array):", falsyValues);

// Loops - циклы

let children = [2002, 2012, 2018, 2022, 2015, 2014, 2015, 2019, 2019, 2011];

// 6 - 12

// for..of

let currentYear = new Date().getFullYear();
let giftCount = 0;

for(let year of children){
    let age = currentYear - year;
    if(age >= 6 && age <= 12){
        // giftCount += 1;
        giftCount++;
        console.log(year + "(" + age +  ")");
    }
}

console.log(giftCount + " of " + children.length + " get gifts");











