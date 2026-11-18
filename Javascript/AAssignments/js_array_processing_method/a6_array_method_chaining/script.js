//  -----------------------------question 1--------------------------

const student=[ 2,3,4,5,6];
const arr=student
.filter((number)=> number <5)
.map((number)=>number*2);

console.log("array chaining:"+ arr);



const marks = [25, 45, 60, 35, 80];
const result = marks
    .filter((mark) => mark >= 40)
    .map((mark) => mark + 5);

console.log(result);

// -----------------------question 2-------------------------
const numbers = [2, 5, 8, 11];
const result1 = numbers
    .filter((n) => n > 5)
    .map((n) => n * 2);

const result2 = numbers
    .map((n) => n * 2)
    .filter((n) => n > 5);

console.log(result1);
console.log(result2);


