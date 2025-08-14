// =============================
// Part 1: JavaScript Basics
// =============================

// Variable declaration & conditionals
let userName = prompt("Enter your name:");
let userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

document.getElementById("message").textContent =
    `Hello ${userName}, you are ${userAge} years old.`;

// =============================
// Part 2: Functions
// =============================

// Function 1: Calculate total with tax
function calculateTotal(price, taxRate) {
    return price + (price * taxRate);
}
console.log("Total with tax:", calculateTotal(100, 0.15));

// Function 2: Toggle theme
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// =============================
// Part 3: Loops
// =============================

// Loop 1: For loop through an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let fruitListEl = document.getElementById("fruitList");
for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    fruitListEl.appendChild(li);
}

// Loop 2: Countdown using while loop
let countdownNum = 5;
let countdownEl = document.getElementById("countdown");
while (countdownNum >= 0) {
    countdownEl.innerHTML += countdownNum + " ";
    countdownNum--;
}

// =============================
// Part 4: DOM Manipulation
// =============================

// 1. Change text on button click
document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("pageTitle").textContent = "Let's Learn JavaScript!";
});

// 2. Toggle theme on button click
document.getElementById("toggleBtn").addEventListener("click", toggleTheme);

// 3. Create a new element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was created with JavaScript!";
document.body.appendChild(newPara);
