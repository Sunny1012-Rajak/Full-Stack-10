const course = ["java", "pythn", "c++", "react", "css"];
course.forEach(function (course, index) {
    console.log(index, course);

});
console.log("-------------------------------");

course.forEach(function (course, index) {
    console.log(`${index + 1}.${course}`);

});
console.log("-------------------------------");
const marks = [20, 30, 40, 50, 60];
marks.forEach(function (marks) {
    console.log(marks);
});

// --------------------question 2------------------------

const product = ["pen", "pencil", "book", "mnc", "mobile"];
const price = [35, 67, 89, 56, 2000];

product.forEach(function (product, index, array) {
    console.log(`index:${index}, ${product} : ${price[index]} |no. of products : ${array.length}`);
});

let total = 0;
price.forEach((price) => {
    total=total+price;
});
 console.log("total price: " + total);