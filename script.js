/*
 * ============================================
 * STUDENT INSTRUCTIONS - QuerySelector Lesson
 * ============================================
 * 
 * Your task: Fix the bugs and implement the shopping cart functionality!
 * 
 * BUGS TO FIX:
 * 1. Line 3: The variable is named "appleButton" but it's selecting "#banana" - fix this!
 * let totallnCent = 0;
 *
 * 2. Line 7: The function is named "addApple" but should handle all items - rename it!
 * 
 * TODO - Implement the following features:
 * 1. Select all three buttons (apple, banana, mango) using querySelector
 * 
  const appleButton = document.querySelector("#apple");
const mangoButton = document.querySelector("#mango");
const bananaButton = document.querySelector("#banana");

 *
 * 2. Create a function that adds items to the shopping cart when clicked
 
const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

 * 3. Display the item name and price in the #shopping-cart div

const addApple = () => {
    shoppingCart.innerHTML += `<p> Apple </p>`;
    totalInCent += 75;
    updateTotal();
}

 * 4. Calculate and update the total price in the #total-span element
const updateTotal = () => {
    totalSpan.textContent = totalInCent / 100;
 * 5. Store prices: Apple = $0.75, Banana = $0.30, Mango = $1.25
 * 
 *  const addApple = () => {
    shoppingCart.innerHTML += `<p> Apple </p>`;
    totalInCent += 75;
    updateTotal();
}
const addMango = () => {
    shoppingCart.innerHTML += `<p> Mango </p>`;
    totalInCent += 125;
    updateTotal();
}
const addBanana = () => {
    shoppingCart.innerHTML += `<p> Banana </p>`;
    totalInCent += 30;
    updateTotal();
}

 * HINTS:
 * - Use querySelector or querySelectorAll to select elements
 * - Use addEventListener to handle click events
 * - Use textContent or innerHTML to update the DOM
 * - You may need to parse prices from strings or store them in variables
 * 
 * ============================================
 */

console.log("script running");

// TODO: Fix this bug - should select #apple, not #banana!
const appleButton = document.querySelector("#apple");
console.log(appleButton);

// TODO: Rename this function to something more generic like "addItem"
const addItem = () => {
  alert("apple button under construction");
};

// TODO: Add event listeners for all three buttons
appleButton.addEventListener("click", addApple);
appleButton.addEventListener("click", addApple);
mangoButton.addEventListener("click", addMango);
bananaButton.addEventListener("click", addBanana);