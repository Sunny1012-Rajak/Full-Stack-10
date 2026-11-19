// -------------------------------question 1-----------
const marks = [67, 92, 45, 78, 56, 100, 34];
marks.sort();
console.log(marks);

const com = marks.sort((a, b) => a - b);
console.log(com);

const com1 = marks.sort((a, b) => b - a);
console.log(com1);

// --------------------------------------
const student = [
    { name: "sunny", marks: "56" },
    { name: "devik", marks: "98" },
    { name: "aarav", marks: "28" },
    { name: "kayrav", marks: "96"},
    { name: "rahul", marks: "74" },
];

const ans=student.sort((b,a)=>b.marks-a.marks);
console.log(ans);


// ----------------------question 2------------------------
const course=["javascript", "HTML", "python", "CSS", "React","bootstrap"];
console.log(course.sort());


course.sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
)
console.log(course);

// ----------------------
const cours=[
    {Cname:"html",fee:7000},
    {Cname:"css",fee:5000},
    {Cname:"bootstrap",fee:8000},
    {Cname:"javascript",fee:9000},
    {Cname:"java",fee:4000},
];
 const result=cours.sort((a,b)=>a.fee-b.fee);
 console.log(result);
const result1=cours.sort((b,a)=>b.fee-a.fee);
console.log(result1);


