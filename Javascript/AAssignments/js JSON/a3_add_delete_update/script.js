// ----------------------question 1------------
const student={
    name:"sunil",
    age:21,
};
student.course="aids";
student["city"]="bhopal";

const newbatch="batch";
student[newbatch]="proversion";
console.log("before updation: "+student);

student["age"]=34;
student.course="aiml";
console.log("after updation: "+student);

// ------------------question 2--------------------
const course1={
    coursename:"cse",
    duration:"4years",
    fees:45000,
    mode:"offline",
}
course1.fees=76000;
course1.instructor="jp morgan";
console.log("before updation:"+course1);




