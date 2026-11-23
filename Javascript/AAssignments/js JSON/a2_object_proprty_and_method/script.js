// -------------------question 1--------------
const student={
    name:"raghav",
    age:34,
    course:"cse",
    isEnrolled:true,
    "father name":"mishra",
    introduce()
    {
        console.log("this is student information");
        
    }
}
console.log(student.introduce());
console.log(student.name);
console.log(student.course);
console.log(student["age"]);
console.log(student["isEnrolled"]);
console.log(student["father name"]);

const selectedProperty="name";
console.log(student[selectedProperty]);

// ----------------question 2--------------
const course={
    coursname:"data analytics",
    duration:"4 months",
  
    displayCourse()
    {
        console.log("heloo");
    },

    methodname:function()
    {
        console.log("this is a another method");
        
    }
}
course.displayCourse();
console.log(course);
console.log(course.methodname());











