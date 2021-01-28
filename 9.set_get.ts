// ** ================================================================================ ** //

// Consider our previous example:
// there is no way for us to read the coordinates of the point
// we can't access x value to display to the user
// What is the work around?

// ** ================================================================================ ** //

class PointExampleGet {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log("X:" + this.x + ", Y:" + this.y);
  }

  // We could add a simple method to return the x value
  getX() {
    return this.x;
  }
}

let pointExampleGet = new PointExampleGet(1, 2);
let getX = pointExampleGet.getX();
console.log(getX);

// ** ================================================================================ ** //

// What if we want to give the user the ability to set the initial coordinates
// and be able to change this coordinate later only if they provide a value within
// a given range?

// ** ================================================================================ ** //

class PointExampleSet {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log("X:" + this.x + ", Y:" + this.y);
  }

  getXval() {
    return this.x;
  }

  setX(value) {
    if (value < 0) throw new Error("value cannot be less than 0");

    this.x = value;
  }
}

let pointExampleSet = new PointExampleSet(1, 2);
let x = pointExampleSet.getXval();
pointExampleSet.setX(222222222);

// ** ================================================================================ ** //

// There is a cleaner way to achive the same thing using property
// So how we can define a property here?

class PointExampleProperty {
  constructor(private x?: any) {}

  draw() {
    console.log("X:" + this.x);
  }

  // Getter method
  get X() {
    return this.x;
  }
  // Setter method
  set X(value) {
    if (value < 0) throw new Error("value cannot be less than 0");

    this.x = value;
  }
}

//   We can now use these properties as fields
let pointExampleProperty = new PointExampleProperty({});

// Read value
pointExampleProperty.X;

// Set new value
pointExampleProperty.X = 10;
