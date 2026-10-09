function sum(a,b)
{
    let c=a+b;
    console.log(c);
}
sum(3,4);

function sum_d(x,y=10)
{
  console.log(x+y);
}
sum_d(4);
sum_d(3,14);

function calculate(a,b,c)
{
    // return a+b-c;
    return a+b*c;
}
let ans =calculate(3,6,8);
console.log(ans);


// function expression;
const greet=function()
{
    console.log("welcome");
}

greet();
/*
// call back function; 
const ques=function()
{
    console.log("hello");
}

const ans1= ques()
{
    console.log("world");
}
ques;*/

const calculateFee = function(fee, months = 1) {
    return fee * months;
};

let totalFee1 = calculateFee(5000);
let totalFee2 = calculateFee(5000, 3);

console.log(totalFee1);
console.log(totalFee2);

