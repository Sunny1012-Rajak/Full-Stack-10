
// ---------------------lexical function---------------------------
let course = "JavaScript";

function showCourse() {
    console.log(course);
}

showCourse();

// -------------------outer and inner function-------------------------

function outerFunction() {
    let message = "Welcome!";

    function innerFunction() {
        console.log(message);
    }

    innerFunction();
}

outerFunction();


// ----------------------closure function----------------------------------

function outer() {
    let message = "Hello, Students!";

    function inner() {
        console.log(message);
    }

    return inner;
}

const greet = outer();

greet();


// -------------------------Array fundamentals---------------------------------

const ar1=[1,2,3,45,5];
let ar2=[3,4,5,6,78];

console.log(ar1);
console.log(ar2);

ar1[3]=55;
ar2[0]="sunny";

console.log(ar1);
console.log(ar2);

// ----------------array print with for loop--------------------------------

 const arr =[10,20,30,40,50];
 const arr1=[100,200,300,400,500];
  
 for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}
for (let i = 0; i <= arr1.length; i++) {
    console.log(arr1[i]);
}

console.log(arr.at(-2));
// -------------------------------push=use to push  element in array----------------------------------
arr.push("sunny");
console.log(arr);
// ---------------------------filter is also use to pop the element-----------------------------
console.log(arr.filter((item)=> item != "sunny"));
// ----------------------pop =use to pop the element---------------------------------------------
arr.pop("sunny");
console.log(arr);
// -------------------splice---------------------------------------------
arr.splice(3);
console.log(arr);
// --------------------------split the words or element-----------------------------
const name="i am a student of ..........";
console.log(name);
let x=name.split(" ");
console.log(x);

// ----------------------unshift---------------------------------------------
arr1.unshift("mango");
console.log(arr1);

// ----------------------for each loop----------------------------
const arr3 =["orange" ,"2kg","nagpur", 20 ,true];
arr3.forEach((element)=>
{
    console.log(element);
}
);
