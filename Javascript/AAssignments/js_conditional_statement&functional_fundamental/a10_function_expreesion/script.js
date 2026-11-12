// ------------------------question 1--------------------------
let greet=function(name)
{
    console.log("hello",name);
    
}
greet("sumit");
greet("mr.adani");
greet("ambani");


let introduce=function(name,city)
{
    console.log(name," = ",city);
    
}
introduce("raj","bhopal");
introduce("ram","pune");
introduce("shruti" ,"banglore");

// ----------------------------question 2------------------------
const add=function(a,b)
{
    return a+b;
}

let ans=add(2,3);
console.log(ans);

// ---------------
const total=function(price,quantity=1)
{
    return price*quantity;
}
console.log(total(20));
console.log(total(20,7));
