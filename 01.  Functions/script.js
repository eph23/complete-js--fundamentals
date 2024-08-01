"use strict";
// Function Declaration
/* 
** Functions are fundamental building blocks of JavaScript
*/
function logger() {
    console.log("My name is Ephraim");
}

// Calling/invoking/running a function
logger();

// Function with arguments
function fruitProcessor(apples, oranges) {
    //     console.log(apples, oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges`;

    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

/* 
Arguments are actual values passed in a function.
parameters are placeholders for arguments
*/

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
