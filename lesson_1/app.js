// V8

document.body.style.color = "white";
document.body.style.fontSize = "7rem";
document.body.style.padding = "100px";
document.write("Hello JavaScript");


// data storage - хранение данных

// var, let, const
// keywords - ключевые слова

// Camel case -

// Data types - Типы данных

// 1. String - текстовый
// 2. Number - числовой
// 3. Boolean - логический
// 4. Null - пустой
// 5. Undefined - неопределенный
// 6. Object - объект

// 7. Symbol
// 8. BigInt

let myName = "Evgeniy";

let mySurname = "Kiselev";
let myMiddleName = "Dmitrievich";

let jobPosition = "fullstack developer";

let programmingExperience = 6.5;
let educationExperience = 3;
let month_salary = 5_000_000;

let isGraduated = true;
let hasCar = false;

let birthDay = null;

let currentGroup; // undefined

// key-value - ключ-значение
let passport = {
    series: "AN",
    no: "123456",
    expiresAt: "01-01-2025",
    issuedAt: "01-01-2015"
}

let geeksStudent = {
    fullName: "John Doe",
    group: 37,
    currentTeacher: {
        fullName: "Evgeniy Kiselev",
        position: "full stack",
        experience: 3
    },
    activity: "frontend",
    currentMonth: 2,
    phoneNumber: null,
    isOnFreeRepeat: false,
    isAlumnee: false
}

console.log("My name is " + myName);





