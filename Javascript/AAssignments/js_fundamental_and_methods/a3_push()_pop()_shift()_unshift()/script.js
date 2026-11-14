// ------------------------question 1-----------

const course=["english","hindi","maths"];
console.log("before push the new element: "+course);
course.push("science","sst");
console.log("after push the new element: "+course);

const remove=course.pop();
console.log(remove);
console.log("after pop() the element: "+course);


course.unshift("sanskrit");
console.log("using unshift() to add new element at the beggining: "+course);

course.shift();
console.log("using shift() to remove first element of the array: "+course);

// -------------------------------question 2----------
console.log("--------------------------------------------------");

const student=["ankit","rahul","shivani","muskan"];
 const removename=student.shift();
 console.log("removing name:" +removename);
 student.push("anuj");
 console.log("add at the last: "+student);
 
 student.unshift("rakesh");
 console.log("add first in array: "+student);
 
 const removelast=student.pop();
 console.log(removelast);
 
