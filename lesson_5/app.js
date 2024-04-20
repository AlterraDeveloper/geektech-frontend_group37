// setInterval(() => {
//     const colors = ["red", "green", "yellow", "purple"];
//     const randomIndex = Math.round(Math.random() * colors.length) - 1;
//     document.body.style.backgroundColor = colors[randomIndex];
// }, 1000);


// DOM - Document Object Model

const button = document.querySelector("#changeColorButton");

// button.innerText = "Hello DOM"
// button.remove();

function getRandomNumber(min, max) {
    return Math.round(Math.random() * max) - min;
}

function convertToHex(number) {
    return number.toString(16).padStart(2, "0").toUpperCase();
}

function generateColor() {
    const red = convertToHex(getRandomNumber(0, 255));
    const green = convertToHex(getRandomNumber(0, 255));
    const blue = convertToHex(getRandomNumber(0, 255));
    // return "#" + red + green + blue;
    return `#${red}${green}${blue}`;
}

function changeColor() {
    const randomColor = generateColor();
    button.innerText = randomColor;
    document.body.style.backgroundColor = randomColor;
}

function createPopup() {
    const popup = document.createElement("div");
    popup.innerText = "Copied!";
    popup.style.width = "300px";
    popup.style.height = "100px";
    popup.style.backgroundColor = "black";
    popup.style.color = "white";
    popup.style.fontWeight = "bold";
    popup.style.fontSize = "5rem";
    popup.style.left = "50%";
    popup.style.top = "100px";
    popup.style.position = "absolute";
    popup.style.textAlign = "center";
    return popup;
}


// Event - события
button.addEventListener("click", changeColor);
button.addEventListener("mouseleave", function () {
    const randomColor = button.innerText;
    navigator.clipboard.writeText(randomColor);
    const popup = createPopup();
    document.body.appendChild(popup);
    setTimeout(function(){
        popup.remove();
    }, 1500);
})

