// ** ================================================================================ ** //

// Check line :20

// ** ================================================================================ ** //

class PointExample6 {
  x: number;
  y: number;

  draw() {
    console.log("X:" + this.x + ", Y:" + this.y);
  }
}

let pointExample6 = new PointExample6();
pointExample6.x = 1;
pointExample6.y = 2;

// Consider a new scenario where you're going to add more properties
// this is again a little bit verbose, is there a cleaner way or better approach?

pointExample6.draw();

// ** ================================================================================ ** //

// In object oriented programming we have this concept called constructor
// every class can have a constructor which is a method that is called
// when we create an instance of that class

// ** ================================================================================ ** //

class PointWithConstructor {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log("X:" + this.x + ", Y:" + this.y);
  }
}

// We immediately get a compilation error because when creating
// a new pointWithConstructor object we need to supply these values

let pointWithConstructor = new PointWithConstructor(1, 2);
pointWithConstructor.draw();

// ** ================================================================================ ** //

// OPTIONAL PARAMETERS

// ** ================================================================================ ** //

// What if we don't know the values or we just want to create the object
// without setting values?

// Remeber that in Typescript we cannot have multiple constructor

// The solution for this problem is make the value optional adding a question mark ?
// in front of constructor parameters before the colon :

class ConstructorOptionalParamenter {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log("X:" + this.x + ", Y:" + this.y);
  }
}

let constructorOptionalParamenter = new ConstructorOptionalParamenter();
constructorOptionalParamenter.draw();

// ** ================================================================================ ** //

// IMPORTANT NOTE: onece you make a parameter optional all the other parameteres
// on the right side of that parameter should also be optional -> rule by Typescript

// ** ================================================================================ ** //
