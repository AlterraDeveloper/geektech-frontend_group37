// let birthDate = "01-01-2001";
// let birthDate2 = {
//     day: 1,
//     month: 1,
//     year: 2001,
//
// }
// let birthDate = new Date(2001,1,1);


// Data types - Типы данных

// 1. String - текстовый
// 2. Number - числовой
// 3. Boolean - логический
// 4. Null - пустой
// 5. Undefined - неопределенный
// 6. Object - объект

// Operators

// 1. String - текстовый

let clientName = "Evgeniy";
let clientSurname = "Kiselev";

// Evgeniy K.

let mbankUserName = clientName + " " + clientSurname[0] + ".";
console.log("Mbank username: " + mbankUserName);

// Concatenation - конкатенация

let bookPrice = "9";
console.log(bookPrice + bookPrice);

// 2. Number - числовой

let monthSalary = 30_000;

// + - * / % **
// short-hand (короткое обновление): += -= *= /= %= **=

console.log("My start salary is:" + monthSalary);

// let newMonthSalary = monthSalary + 5_000;
// monthSalary = monthSalary + 5_000;
monthSalary += 5_000;

// Infinity, NaN (Not a Number)

console.log("Yahoo! My new salary is:" + monthSalary);

console.log(-monthSalary / 0);

// 3. Boolean - логический

// logical(логические): && || !
// comparison (сравнения): == === != !== > < >= <=

// Conditions - условия

let someNumber = 17;

if (someNumber % 2 === 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}

// let userAge = prompt("How you years old?")
//
// if (userAge < 18) {
//     console.warn("ERROR. Content 18+")
// }

// let cardStatus;
// let fuelVolume = prompt("How much fuel you buy?");
//
// if (fuelVolume < 100) {
//     cardStatus = "SILVER";
// } else if (fuelVolume < 200) {
//     cardStatus = "GOLD";
// } else {
//     cardStatus = "PLATINUM"
// }
//
// alert("Your current status is: " + cardStatus);
// console.log("Your current status is: " + cardStatus);

let conversionAmount = prompt("Enter amount to convert");
let conversionCurrency = prompt("Enter currency to convert");
let conversionResult = 0;

conversionCurrency = conversionCurrency.toUpperCase();

let rate = 0;

switch (conversionCurrency) {
    case "USD":
        rate = 89.7;
        break;
    case "EUR":
        rate = 96.5;
        break;
    case "RUB":
        rate = 1.2;
        break;
    case "CNY":
        rate = 10;
        break;
    case "KZT":
        rate = 0.23;
        break;
}

switch (conversionCurrency){
    case "USD":
        rate = 89.7;
        break;
}

if (rate !== 0) {
    conversionResult = conversionAmount * rate;
    console.log(conversionAmount + " " + conversionCurrency + " = " + conversionResult + " KGS");
}else{
    console.error("Invalid currency or invalid amount");
}

let homeWorkTotal = 45;
let testTotal = 55;

if(homeWorkTotal >= 40 && testTotal >= 40){
    console.log("Free repeat!!!")
}

let currentWeekDay = "mon";

if(currentWeekDay === "wed" || currentWeekDay === "sat"){
    console.log("Yahoo!! Today JS lesson")
}










