// ------------------------question 1-------------------
let course="webdevelopment";

function anything()
{
    let message="welcome";
    console.log(message);
    console.log(course);
    
}
anything();
console.log("--------------------------------------------");

// ------------------------question 2------------
let country="india";
function outer()
{
    let city="bhopal";

    function inner()
    {
        let name="sunny";
        console.log(country);
        console.log(city);
        console.log(name); 
    }
    inner();
}
outer();