// --------------------question 1-----------------
const student={
    name:"sunny rajak",
    age:45
};
console.log(student);
const newproperty="course";
newproperty.course="btech";
student["city"]="bhopal";
student["age"]=78;
student.course="mtech";
console.log(student);

// -----------question 2--------------------;
const course={
    coursename:"data analytics",
    duration:"4 years",
    fees:45000,
    mode:"offline",
};
console.log(course);

course.fees=70000;
const instructor="instructorname";
instructor.instructorname="sr tiwari";
delete course.mode;
console.log(course);
