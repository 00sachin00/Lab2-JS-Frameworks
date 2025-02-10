// utils.js

// Function 1: Display greeting message
export function greetUser(first, last) {
    console.log(`Hello ${first} ${last}, welcome to our Coding Hub!`);
}

// Function 2: Convert kilometers to miles
export function convertKmToMiles(km) {
    return (km * 0.621371).toFixed(2);
}

// Function 3: Calculate the sum of all numbers from 1 to N
export function sumUpToN(n) {
    return (n * (n + 1)) / 2;
}

// Function 4: Display animated emoji reactions
export function showEmojiReactions() {
    const reactions = [
        "😀 Feeling Happy!",
        "🎉 Celebration Time!",
        "🔥 Keep Going!",
        "🚀 Sky is the Limit!",
        "💪 Stay Strong!",
        "🌟 Shine Bright!"
    ];

    reactions.forEach((reaction, index) => {
        setTimeout(() => console.log(reaction), index * 1500);
    });
}
