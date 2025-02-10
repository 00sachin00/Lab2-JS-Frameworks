// app.js

// Import functions from utils.js
import { greetUser, convertKmToMiles, sumUpToN, showEmojiReactions } from "./utils.js";

// 1️⃣ Greet the user
greetUser("Sachin", "Adhikari");

// 2️⃣ Convert 7 km to miles
console.log(`10 km is ${convertKmToMiles(10)} miles`);

// 3️⃣ Calculate sum of numbers from 1 to 10
console.log(`Sum of numbers from 1 to 10: ${sumUpToN(10)}`);

// 4️⃣ Show animated emoji reactions
console.log("\n😃 Emoji Reactions:");
showEmojiReactions();
