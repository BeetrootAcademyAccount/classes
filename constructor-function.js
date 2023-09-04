/*
Constructor function is the predecessor of class
  Static methods and properties cannot be accessed by the instance
  Instance methods and properties need an instance in order to be used
*/

//Constructor Function

function Rect(width, height) {
  this.width = width;
  this.height = height;
  this.calcArea = () => {
    console.log(pi);
    return this.height * this.width;
  };
}

//Instance property
Rect.prototype.color = "blue";

//Instance method
Rect.prototype.calcArea = function () {
  console.log("Pi:", Rect.pi);
  return this.height * this.width;
};

//Static property
Rect.pi = 3.14;

//Static method
Rect.calcCircumference = function (a, b) {
  return 2 * (a + b);
};

const rect1 = new Rect(20, 20);
const rect2 = new Rect(202, 201);
const rect3 = new Rect(203, 202);
const rect4 = new Rect(203, 203);

//Access static property and method:

console.log(Rect.pi);
console.log(Rect.calcCircumference(10, 10));
