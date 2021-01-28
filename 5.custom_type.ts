// ** ================================================================================ ** //

// Let's take as an example a function that has a lot of parameters

// ** ================================================================================ ** //

// This is bad and we should avoid it
let drawPoints = (x, y, a, b, c, d, e) => {
  // code...
};

// How we can write this better?

// In those situations is very likely that all of these parameters belong
// to a single concept so we can group them (encapsulate) in a Object

let drawPoint = (point) => {
  // code...
};

drawPoint({
  x: 1,
  y: 2,
});

// Do you see the problem with this code here?

// We can pass an Object when calling drawPoint function that has
// completely different property

drawPoint({
  name: "askPhill",
});

// Nowhere here we're getting the compile time error

// But we know that this code is going to break at runtime because our code
// in the function is expecting x and y properties

// ** ================================================================================ ** //

// There are 2 solutions for this problem

// ** ================================================================================ ** //

// 1. Inline annotation -> works fine with simple cases

let drawPointInlineAnnotation = (point: { x: number; y: number }) => {
  // code...
};

// The problem with this approach:
// with a lot of property this is quite verbose and also chances are that somewhere
// else another function in our code is expecting the point object, we don't want
// to repeat this object in multiple places

// ** ================================================================================ ** //

// 2. Interface -> better approach when Inline annotation is verbose

//  With Interface we define the shape of an Object

interface Pointinterface {
  x: number;
  y: number;
}

let drawPointInterface = (point: Pointinterface) => {
  // code...
};

drawPointInterface({ x: 2, y: 4 });

// As you can notice this is much cleaner and we can also reuse this in multiple places

// Notice also that we are using naming convention, because we're introducing a custom type
// we use the Pascal naming convention so the first letter of every word in the name of the interface
// should be capital
