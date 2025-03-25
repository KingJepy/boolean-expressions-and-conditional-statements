/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

const hasSword = true;
const hasShield = false;
const hasMoney = false;

console.log("You are walking down a path and lemonade stand. He asks you if you would like to buy some.");
const choice2 = readline.question("Do you buy some?");

if (choice2 === "yes" && hasMoney){
  console.log("You drink some delicious lemonade!")
} else if (choice2 === "yes" && !hasMoney){
  console.log("Scram")
}else {
  console.log("ok Have a nice day")
}

console.log("A black knight approaches you and challenges you to a duel.");
const choice3 = readline.question("Do you accept?");

if (choice3 === "yes" && hasSword && hasShield){
  console.log("You block the knights attacks and stab him through the heart.")
} else if (choice3 === "yes" && (hasSword || hasShield)){
  console.log("You fight valiantly until you are both exhausted. YOou shake the knights hand and go your seperate ways.")
}else if ("no"){
  console.log("The knight scoffs at you and rides away.")
}else if ((choice3 === "yes" && !(hasSword || hasShield))){
  console.log("The knight slays you and you are left to bleed out.")
} else {
  console.log("you run away.")
}