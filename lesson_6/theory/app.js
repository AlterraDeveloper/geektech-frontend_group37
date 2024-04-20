

// const div = document.querySelector("div");
const div = document.getElementsByTagName("div")[0];

console.log(div.classList);
console.log(div.className);

document.body.style["background-color"]  = "red";
document.body.style.backgroundColor = "red";

const buttons = document.querySelectorAll("button");

// const firstButton = buttons[0];
// const secondButton = buttons[1];
// const thirdButton = buttons[2];
// const fourthButton = buttons[3];

const [firstButton, secondButton, thirdButton, fourthButton] = [...buttons];

// function declaration
// function buttonClickHandler(event){
//     console.log(event.target.innerText);
//     console.log(event.target.textContent);
// }

// function expression
const buttonClickHandler = function (event){
    console.log(event.target.innerText);
    console.log(event.target.textContent);
}

firstButton.addEventListener("click", buttonClickHandler);
thirdButton.addEventListener("click", buttonClickHandler);

secondButton.onclick = buttonClickHandler;
fourthButton.onclick = buttonClickHandler;

