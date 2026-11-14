// ----------------------------question 1-----------------
const marks=[45,67,78,99,23];
const courses=["html","css","react"];
console.log("before updating:"+ marks);
console.log("before updating:"+courses);
marks[0]=100;
marks[4]=200;

courses[0]="Data Analytics";
courses[2]="javascript";

console.log("marks length:"+marks.length);
console.log("cousre length:"+courses.length);

console.log("after updating: "+marks);
console.log("after updating: "+courses);
console.log("---------------------------------------------------");

// ----------------------------question 2---------------
const product=["trackpad","monitor","keyboard","mouse"];
product[1]="speaker";
console.log("product length: "+product.length);
console.log("before updating :"+product);


product[5]="laptop";
console.log("after updating the product length: "+product.length);
console.log("after updating the product :"+product);
console.log(product[4]);




