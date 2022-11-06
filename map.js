
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let result = [];
for (let num of nums) {
  result.push(num * 2);
};

console.log(result);

// Using map()
const multByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplfied = nums.map(function (num) { return num * 2 });
console.log(simplfied);

// Simplfied w/ map() + arrow function
const newMapResults = nums.map(num => num * 2);
console.log(newMapResults);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript',
    age: 42
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML',
    age: 44
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS',
    age: 22
  },
];

// Return results as array
let studentsWithIds = students.map(obj => [obj.name, obj.id]);
console.log(studentsWithIds);

// Return results as object
// To return object, wrap in brackets instead of square brackets
let studentObject = students.map(obj => ({ name: obj.name, id: obj.id }));
console.log(studentObject);

// Add key pair value to objects
let newKeyPair = students.map(obj => obj.age = obj.id + 1);
console.log(newKeyPair);

let ageObjects = students.map(obj => ({name: obj.name, id: obj.id, age: obj.age}));
console.log(ageObjects);

