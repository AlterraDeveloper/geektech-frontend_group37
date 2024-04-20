// console.log("lesson 4");
//
// let planetIndex = Number(prompt("planet index"));
//
// switch (planetIndex) {
//     case 1: // ===
//         console.log("Mercury");
//         break;
//     case 2:
//         console.log("Venus");
//         break;
//     case 3:
//         console.log("Earth");
//         break;
//     default:
//         console.error("Invalid index");
// }

// var, let, const

//E uropean
//C omputer
//M anufactures
//A ssociation
// ECMAScript

var myName = "Evgeniy";
let mySurname = "Kiselev";
const myFatherName = "Dmitrievich";

// mySurname = "Japarov";
// myName = "Ivan";
// myFatherName = "Sadyrovich";

const myInfo = {
    myName: "Evgeniy",
    mySurname: "Kiselev",
    myFatherName: "Dmitrievich"
};

console.log("Before:", myInfo);
myInfo.myFatherName = "Ivanovich";
console.log("After:", myInfo);

let array = [1,2,3];
let arrayCopy = array;

array.pop()
array.pop()
array.pop()
array.push(9,8,7)
console.log(array);
console.log(arrayCopy);


let amount = 1000;
let amountCopy = amount;

// amount++;
// amount += 1
// amount = amount + 1

// amount--;
// amount -= 1;
// amount = amount - 1;

// console.log(amount, amountCopy);
// console.log(++amount); // prefix
// console.log(amount++); // postfix
// let number = 5;
// console.log(++number + number++) // 6 + 6 = 12
// console.log(number++ + ++number); // 11

// for..of

for(const item of array){

}


// for со счетчиком

for(let i = 0; i <= 10; i++){
    console.log(i + " ^ 2 = " + i**2);
}

const names = ["Anna", "Sveta", "Vlad", "Vlas", "Artem", "Marina"];
console.log("Before:", names);
let vladIndex = -1;
for(let i = 0; i < names.length; i++){
    if(names[i] === "Vlad"){
        vladIndex = i;
    }
}
names.splice(vladIndex, 1);
console.log("Delete name on position:", vladIndex);
console.log("After:", names);

const INN = "2150520O5l2345";

for(let i = 0; i < INN.length; i++){
    if(isNaN(Number(INN[i]))){
        console.error("Error on position:", i + 1);
    }
}

const phone = "+996555112233"; // "**33
let maskedPhone = "";
for(let i = 0; i < phone.length; i++){
    const phoneDigit = phone.charAt(i);
    // const phoneDigit = phone[i];
    // if((phone.length - i) <= 2){
    if(i < 4 || i >= phone.length - 3){
        maskedPhone += phoneDigit;
    }else{
        maskedPhone += "-";
    }
}

console.log(phone + " -> " + maskedPhone);


// Functions - функции

function sum(num1, num2){
    const result = num1 + num2;
    return result;
}

console.log(sum(7,8));

function charAt(string, index){
    if(index >= 0){
        return string[index] || "not found";
    }else{
        const newIndex = string.length + index;
        return string[newIndex] || "not found";
    }
}

console.log(charAt("qwerty", 0)); // q
console.log(charAt("qwerty", 5)); // y
console.log(charAt("qwerty", -1)); // y
console.log(charAt("qwerty", 100)); // ''
console.log(charAt("qwerty", -50)); // ''


openWebStorm();
createFolder();
addFileToFolder();
makeHomework();
zipFolder();
pushZipToGeeksOnline();
waitResult();







