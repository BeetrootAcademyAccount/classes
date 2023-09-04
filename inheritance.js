class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.legs = 4;
  }

  talk() {
    console.log("Random animal noises");
  }
}

class Cat extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  talk() {
    console.log("meow");
  }
}

class Dog extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  talk() {
    console.log("Woof");
  }
}

class Mouse extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  talk() {
    console.log("Screech");
  }
}

class Spider extends Animal {
  constructor(name, species) {
    super(name, species);
    this.legs = 8;
  }

  talk() {
    console.log("");
  }
}

const cat = new Cat("John", "cat");
const dog = new Dog("Johnny", "dog");
const mouse = new Mouse("Jerry", "mouse");
const spider = new Spider("Spider", "spider");

console.log(cat);
console.log(dog);
console.log(spider);
