//Factory Function
function createRect(height, width) {
  return {
    height: height,
    width: width,
    calcArea: function () {
      return this.height * this.width;
    },
  };
}

const rect1 = createRect(20, 20);
const rect2 = createRect(40, 60);
const rect3 = createRect(10, 20);

rect1.calcArea();
