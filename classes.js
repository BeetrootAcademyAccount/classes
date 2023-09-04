//Classes
class MathUtils {
  static pi = 3.14;

  static calcRectArea(a, b) {
    return a * b;
  }

  calcCircleArea(r) {
    return pi * r * r;
  }
}

const circle1 = new MathUtils();
circle1.calcCircleArea(5);

class Rect {
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }

  calcArea() {
    console.log(this._height * this._width);
  }
}

const rect1 = new Rect(20, 20);
const rect2 = new Rect(30, 10);
const rect3 = new Rect(40, 20);

const test = rect1.calcArea.bind(rect1);
test();
rect1._width;

//console.log(rect1);
const person1 = {
  name: "Ivo",
  age: 31,
};
const person2 = Object.assign({}, person1);
