function sunny()
{
    console.log("hello sunny"); 
}

function rajak(name)
{
    name();
}
rajak(sunny);

// ---------------------question 1------------
function greet()
{
    console.log("welcome to my vlog");
    
}

function processuser(callback) // this is a callback function
{
    callback();
}

const showMessage=()=>
{
    console.log("show my vlog");
    
}

processuser(greet);
processuser(showMessage);

// -----------------------question 2--------------

function calculate(a,b,callback)
{
   let sum=a+b;
   callback(sum); 
}
const showresult=(result)=>
{
    console.log("sum is:"+ result);
}
const showmessage1=(result)=>
{
    console.log("this is another function:"+result);
    
}
calculate(10,20,showresult);
calculate(50,50,showmessage1);
calculate(40,50,showresult);