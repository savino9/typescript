// // ** ================================================================================ ** //

// // TYPES

// // ** ================================================================================ ** //

// // We can do this in JS because of type coercion

// let count = 5;
// count = "a";

// // ** ================================================================================ ** //

// // Let's try do declare a variable without initializig it

// let a;

// // This is exactly what happen in JS by default every value is type any

// a = 1;
// a = true;
// a = "a";

// // Notice that not even Typescript doesn't complain about this
// // So.. what's the solution here?

// // ** ================================================================================ ** //

// // TYPE ANNOTATION

// // ** ================================================================================ ** //

// // If we don't know the value of a variable head of time, that when we use type annotation

// let b: number;
// b = 1;
// b = true;
// b = "a";

// ** ================================================================================ ** //

// Different types in Typescript:

// ** ================================================================================ ** //

// 1. number -> any integer or floating point numbers
// 2. booleans -> true || false
// 3. string -> "string"
// 4. any
// 5. array -> [1,2,3]
// 6. enum -> group of constants

// ** ================================================================================ ** //

// Example:

// This is NOT a good practice!
// let anyArray: any[] = [1, true, "s", false];

// Proper way
let array: number[] = [1, 2, 3];

// ** ================================================================================ ** //

// If you are working with a group of related constants you would use enum

// In plain old vanilla JS you would define:
const ColorRed = 1;
const ColorGreen = 2;
const ColorBlue = 3;
const ColorPurple = 4;
// This is a little bit verbose

// With enum we can put all these related constant in a container like so
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
  Purple = 4,
}

let backgroundColorHeader = Color.Purple;

let backgroundColor = Color.Green;

// Now let's compile this code and check how enum is in JS
