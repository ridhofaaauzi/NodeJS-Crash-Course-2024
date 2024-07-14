// const { generateRandomNumber, celciusToFahrenheit } = require("./utils");

// console.log(`Random Number : ${generateRandomNumber()}`);
// console.log(`Celcius to Fahreheit : ${celciusToFahrenheit(0)}`);

import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());
console.log(`Posts Length: ${getPostsLength()}`);
