// Callback functions - функции обратного вызова

function makeDiscount(amount, discount) {
    if (discount > 0 && discount < 1) {
        return amount - amount * discount
    } else {
        return amount - amount * (discount / 100);
    }
}

const makeDiscountArrow = (amount, discount) => {
    if (discount > 0 && discount < 1) {
        return amount - amount * discount
    } else {
        return amount - amount * (discount / 100);
    }
}


console.log(makeDiscount(4000, 25));
console.log(makeDiscount(2000, 0.25));

const button1 = document.querySelector("#b1");
const button2 = document.querySelector("#b2");
const button3 = document.querySelector("#b3");

button1.addEventListener("click",
    function(event) {
        console.log("From " + event.target.innerText);
    });


const button2Callback = function (event) {
    console.log("From " + event?.target.innerText ?? "expression!!!");
}

button2.addEventListener("click", button2Callback);

// arrow functions - стрелочные функции

const button3Callback = (event) => {
    console.log("From " + event.target.innerText);
}

button3.addEventListener("click", button3Callback);

// Anonymous functions - анонимные (безымянные) функции





function timeoutCircle(seconds){
    const circle = document.querySelector(".circle");
    circle.innerText = seconds;

    const intervalToken = setInterval(() => {
        circle.innerText--;
        console.log("timer")
    }, 1000);

    setTimeout(() => {
        circle.remove();
        clearInterval(intervalToken);
    }, seconds * 1000);
}

// timeoutCircle(7);


// map

const numbers = [1,4,8,5,2,3];

const numbersStrings = [];

for (const num of numbers) {
    const text = num % 2 === 0 ? "четное" : "нечетное"
    numbersStrings.push(text);
}

const numbersStringsMap =
    numbers.map(num => num % 2 === 0 ? "четное" : "нечетное")

const numbersFilter = numbers.filter(num => num > 3);

console.clear();

console.log(numbers, numbersStrings, numbersStringsMap)
console.log(numbers, numbersFilter);
