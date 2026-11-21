// -------question 1---------------
const cre=document.createElement("h2");
const cre2=document.createElement("p");
const cre3=document.createElement("button");
console.log("----------------this is tags");
console.log(cre);
console.log(cre2);
console.log(cre3);
console.log("--------------this is tag name");
console.log(cre.tagName);
console.log(cre2.tagName);
console.log(cre3.tagName);
console.log("---------------check tags is present or not");
console.log(cre instanceof HTMLElement);
console.log(cre2 instanceof HTMLElement);
console.log(cre3 instanceof HTMLElement);
console.log("----------------compare one tag===another tag");
const cre4=document.createElement("p");
const res=cre4===cre2;
console.log(res);

// -------------question 2---------
console.log("+++++++++++++++++++++++++++++++++++++++++++++");

function createCourseHeading()
{
    let ans=document.createElement("h3");
    return ans;
}
let res1=createCourseHeading();
console.log(res1);

const createCourseDescription=()=>
{
    let res2=document.createElement("p");
    return res2;
}
 let res4=createCourseDescription() ;
console.log(res4);

const ans1=document.getElementById("courseContainer").children.length;
console.log(ans1);


