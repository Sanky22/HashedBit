// ===============================
// Assignment 9 - JS Practice 1
// ===============================


// 1️⃣ Difference between var, let, const

function checkScope() {
  var a = 10;      // function scoped
  let b = 20;      // block scoped
  const c = 30;    // block scoped and cannot be reassigned

  if (true) {
    var a = 100;   // affects outer 'a'
    let b = 200;   // new block variable
    const c = 300; // new block variable

    console.log("Inside block:");
    console.log(a, b, c);
  }

  console.log("Outside block:");
  console.log(a, b, c);
}

checkScope();


// 2️⃣ Return second fruit

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit() {
  return fruits[1];
}

console.log("Second Fruit:", getSecondFruit());


// 3️⃣ Push and Pop

function modifyArray(arr) {
  arr.push("New Item");
  arr.pop();
  return arr;
}

console.log("Modified Array:", modifyArray([1, 2, 3]));


// 4️⃣ Square numbers using map()

function squareNumbers(arr) {
  return arr.map(num => num * num);
}

console.log("Squared Numbers:", squareNumbers([1, 2, 3, 4, 5]));


// 5️⃣ Filter out even numbers (return odd numbers)

function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

console.log("Odd Numbers:", getOddNumbers([1, 2, 3, 4, 5, 6]));


// 6️⃣ Object greeting

const person = {
  name: "Sanky",
  age: 22,
  occupation: "Developer"
};

function greetPerson(obj) {
  console.log("Hello, my name is " + obj.name +
              ". I am " + obj.age +
              " years old and I work as a " +
              obj.occupation + ".");
}

greetPerson(person);


// 7️⃣ Area of rectangle

function calculateArea(rectangle) {
  return rectangle.width * rectangle.height;
}

console.log("Area:", calculateArea({ width: 10, height: 5 }));


// 8️⃣ Get object keys

function getKeys(obj) {
  return Object.keys(obj);
}

console.log("Object Keys:", getKeys({ name: "John", age: 25, city: "Mumbai" }));


// 9️⃣ Merge two objects

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

console.log("Merged Object:", mergeObjects({ a: 1 }, { b: 2 }));


// 🔟 Sum using reduce()

function sumNumbers(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sumNumbers([10, 20, 30, 40]));