// Get Dates
const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

// Set Hello World
const helloElem = document.getElementById("hello");
helloElem.innerHTML = "Hello world!";

// Animate Hello
helloElem.style.transition = "transform 1s, color 0.5s";
let scaleUp = true;

setInterval(() => {
    if (scaleUp) {
        helloElem.style.transform = "scale(1)";
        helloElem.style.color = "#008b8b";
    } else {
        helloElem.style.transform = "scale(0.8)";
        helloElem.style.color = "#1e6aceff";
    }
    scaleUp = !scaleUp;
}, 700);
