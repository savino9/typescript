// ** ================================================================================ ** //

// In a real world project we're going to work with a lot of different files,
// so ideally we want to move the definition of the class somewhere else

// The actual definition of module require more explanation but for now in order
// to understand the concept we can simply say that: In typescript you can think
// of each file as a module.

// ** ================================================================================ ** //

import { PointAB } from "./pointAB";

let pointAB = new PointAB(1, 2);
pointAB.draw();
