// ** ================================================================================ ** //

// ACCESS MODIFIER

// ** ================================================================================ ** //

// Keyword we can apply to a member of a class to control it's access from the outside

// - private -> The private modifier allows access within the same class
// - public -> The public modifier allows access from any location
// - protected -> The protected modifier allows access within the same class and subclasses

// ** ================================================================================ ** //

// By default all members are public

class PointExample8 {
  public x: number;
  public y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log("X:" + this.x + ", Y:" + this.y);
  }
}

let pointExample8 = new PointExample8();
pointExample8.x = 1;
pointExample8.y = 2;

pointExample8.draw();

// ** ================================================================================ ** //

// Is there a better way to write the same constructor using the access modifier?
// Can we get rid of the ugly assignment variables with this.x = x ?

// ** ================================================================================ ** //

class PointExample9 {
  constructor(private x?: number, private y?: number) {
    // if you prefix a costructor parameter with access modifier
    // typescript compiler will generate these fields for us and will also
    // initialize that field with the value of his argument
  }

  draw() {
    console.log("X:" + this.x + ", Y:" + this.y);
  }
}

let pointExample9 = new PointExample9(1, 2);

pointExample8.draw();
