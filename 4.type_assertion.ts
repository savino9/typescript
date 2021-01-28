// ** ================================================================================ ** //

// Declare a simple message variable and assign it to a string

// ** ================================================================================ ** //

let message1 = "ask";

let message2 = "phill";

let final_message = "";

// message. -> will active the intellisense and with the tooltip we can see
// all things we can do with a string

final_message = message1.concat(message2);

// ** ================================================================================ ** //

// Notice here that if we don't initialize the variable the type will be "any"
// If we try to access the intellisesnse is not available anymore

let anyMessage;
anyMessage = "abc";

// ** ================================================================================ ** //

// TYPE ASSERTIONS

// ** ================================================================================ ** //

// We can't use the functions provided by intellisense because we need to explicitly
// tell typescript that the variable message is going to be a string
// -> this is what we call type assertions

// There are 2 ways:
// 1. This is what you see more often
let endsWithC = (<string>message1).endsWith("c");

// 2.
let alternative = (message1 as string).endsWith("c");

// Let's clarify that this type assertion does not change the type of the variable
// at runtime, it's no gonna restructure that object in memory

// Purely a way to tell the typescript compiler about the type of a variable so we
// can access intellisense for instance
