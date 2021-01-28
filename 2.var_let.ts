// ** ================================================================================ ** //

// LET VS VAR

// ** ================================================================================ ** //

// Using the VAR keyword the "i" variable is meaningful and available also
// outsite the for block

// In JS a variable declared with the VAR keyword is scoped to the nearest function
// -> in this case is the doSomething

// ** ================================================================================ ** //

function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Finally: " + i);
}

doSomething();

// ** ================================================================================ ** //

// Using the new LET keyword the variable is scoped to the nearest block

// This is the proper way to declare variables which prevent a lot of
// issues later down the road

// ** ================================================================================ ** //

// Typescript compiler reports errors but still generate valid JS code!

// ** ================================================================================ ** //
