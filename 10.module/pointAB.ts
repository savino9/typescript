export class PointAB {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log("X:" + this.x + ", Y:" + this.y);
  }
}
