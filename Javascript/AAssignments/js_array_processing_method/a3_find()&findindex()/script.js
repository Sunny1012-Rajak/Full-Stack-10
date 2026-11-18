// ---------------------------------question 1-------------------
const marks=[32, 45, 68, 39, 85, 55];
const find=marks.find((marks)=>
{
    return marks>=60;
});
console.log(find);

const findindx=marks.findIndex((marks)=>
{
    return marks<40;
});

console.log(findindx);


const find1=marks.find((marks)=>
{
    return marks>90;
});
console.log(find1);

const findidx=marks.findIndex((marks)=>
{
    return marks===100;
});
console.log(findidx);
console.log("----------------------------------");

// ---------------------question 2---------------------------------
const course=["HTML", "CSS", "JavaScript", "React", "Node.js","Python"];
const char=course.find((course)=>
{
    return course.length>=5;
});
console.log(char);


const  answr=course.findIndex((value)=>
{
    return value==="React";
})
console.log(answr);


const search=course.find((value)=>
{
    return value==="java";
});
console.log(search);

const search1=course.findIndex((value)=>
{
    return value==="java";
});
console.log(search1);







