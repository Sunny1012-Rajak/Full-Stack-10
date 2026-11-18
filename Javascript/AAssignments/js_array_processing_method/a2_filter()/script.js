// ----------------------------question 1--------------
const student = ["sunny", "arav", "devik", "rahul", "gaurav"];
const marks = [50, 60, 30, 80, 90];

const filter = marks.filter((marks) => {
    return marks >= 60;
});
console.log(filter);


const result = student.filter((student, index) => {
    return index >= 3;
});

console.log(result);

// ------------------------question 2-------------

const product =["ball","bat","rocket","pen","copy"];
const price=[2000,600,1000,500,700];
 
const pp=product.filter((value,index)=>
{
    return price[index]<1000;
});
console.log(pp);


const ss=product.filter((value,index)=>
{
    return price[index]>500 && price[index]<2000;
});
console.log(ss);

