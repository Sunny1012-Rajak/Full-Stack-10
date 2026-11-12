// ------------------------assignment 2---

// ------------------------------question 1-------------
const age =19;
const haslicense=true;
 if(age>=18)
 {
    if(haslicense)
    {
        console.log("you can drive"); 
    }
 }

 const isloggedin=true;
 const isadmin=false;
 if(isloggedin)
 {
    if(isadmin)
    {
        console.log("welcome admin");
    }
    else{
        console.log("welcome user"); 
    }
 }
 else{
    console.log("Please Logged In");
 }

//  -------------------------------question 2----------------

const choice=1;

switch(choice)
{
    case 1:console.log("hello");
        break;
    case 2: console.log("about");
        break;
    case 3: console.log("contact");
        break;
    default:console.log("invalid choice");

}