// for..of, for, while, do..while, for..in

function emptyArray(array) {
    while (array.length) {
        array.pop();
    }
}

const numbers = [1, 2, 3, 4, 5];
const numbersCopy = numbers;

console.log("Before:", numbers)
console.log("Before copy:", numbersCopy)
const result = emptyArray(numbers)
console.log("After:", numbers)
console.log("After:", numbersCopy)
console.log("Result:", result)

// Value types: number, string, boolean, undefined
// Reference types: null, object


function simpleGame() {
    const successNumber = 8;
    let userNumber = 0;
    do {
        userNumber = Number(prompt("[1-9]"));

    } while (successNumber !== userNumber)
    console.log("SUCCESS!!!!!!!!!")
}

// simpleGame();

const cashierBagAmount = 35_000;

const banknoteStructure = {
    50: 20,
    100: 15,
    200: 8,
    500: 12,
    1000: 6,
    2000: 1,
    5000: 4
}

let checkSum = 0;

// for(let banknote in banknoteStructure){
//     const banknoteResult = banknote * banknoteStructure[banknote];
//     checkSum += banknoteResult;
// }

for(let banknote of Object.keys(banknoteStructure)){
    const banknoteResult = banknote * banknoteStructure[banknote];
    checkSum += banknoteResult;
}

if(cashierBagAmount !== checkSum){
    console.error("CASHIER BAG ERROR. SALDO:", cashierBagAmount - checkSum);
}


const userSex = 2

if(userSex === 1){
    console.log("female");
}else{
    console.log("male");
}

console.log(userSex === 1 ? "female" : "male");

const isMarried = true;

console.log(isMarried ?
    (userSex === 1 ? "замужем" :"женат") :
    (userSex === 1 ? "незамужем" : "холост"));

const isVipClient = true;

const discount = isVipClient ? 20 : 0;


