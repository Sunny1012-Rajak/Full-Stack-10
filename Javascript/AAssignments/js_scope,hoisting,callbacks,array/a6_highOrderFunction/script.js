// --------------question 1------------
function performoperation(a,b,operation)
{
    return operation(a,b);
}

const sum=(a,b)=>
{
    return a+b;
} 

const multiply=(a,b)=>
{
    return a*b;
}
let reslut=performoperation(20,10,sum);
let result2=performoperation(2,3,multiply);
console.log(reslut);
console.log(result2);

// --------------------------question 2--------------\
function creategreeting()
{
    return function()
    {
        console.log("welome welcome welcome");
    }
}

const greet=creategreeting();
greet();


function createmultiplyer()
{
    return (number)=>
    {
        return number*2; 
    }
}
const double=createmultiplyer()
console.log( double(2));
console.log(double(7));

