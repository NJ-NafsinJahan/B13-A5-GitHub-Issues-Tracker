# ⭐ B13-A5-GitHub-Issues-Tracker

## 📄Answer to Some Questions:

### 📝✨ 1️⃣ What is the difference between var, let, and const?

_Answer:_

var: ‘var’ is an older version variable declaration keyword of JavaScript. It is a function scope, we can re-declare and re-assign values in it .var is not used nowadays commonly.

let: ‘let’ is an ES6 variable declaration keyword of JavaScript. It is block scope, we can re-declare and re-assign values in it .

const: ‘const’ is an ES6 variable declaration keyword of JavaScript. It is block scope, we can not re-declare and re-assign values in it, because its use for constant values. Mostly used keyword.

### 📝✨ 2️⃣ What is the spread operator (...)?

_Answer:_

The spread operator, as its name suggests, spreads or expands data. It is an ES6 feature used to spread or expand elements from arrays, objects, and strings. Therefore, it can be used for different purposes without manual copying or looping.

### 📝✨ 3️⃣ What is the difference between map(), filter(), and forEach()?

_Answer:_

In JavaScript, map(), filter(), and forEach() methods are useful array functions, by applying custom logic they make things easier to work with and process data.

The map(), filter(), and forEach() methods are powerful JavaScript array functions that help transform and process data efficiently. They allow you to apply custom logic to arrays in a clean, functional programming style.

map(): By applying a callback function to each element of the original array, it can change all the elements of the array and create a new one.

filter(): By applying condition it selects some of the elements and returns a new array.

forEach():This method executes a function for each element of an array but does not return a new array. Works for Loop only.

### 📝✨ 4️⃣ What is an arrow function?

_Answer:_

An arrow function is a JavaScript ES6 feature that provides a shorter syntax for writing functions, making the code cleaner and more readable.

_Normal function:_

```bash
function sum(a, b){
return a + b;
}
```

Array function:\*

```bash
const sum = (a,b) => a + b;
```

### 📝✨ 5️⃣ What are template literals?

_Answer:_

Template literals are an ES6 feature in JavaScript that use backticks ( ` ` ) to define strings and make it easy to include variables and expressions inside a string using ${}.

_Example:_

```bash
let a = 20;
let b = 30;
console.log(`The sum of ${a} and ${b} is ${a + b}`);

```

_Output: The sum of 20 and 30 is 50_
