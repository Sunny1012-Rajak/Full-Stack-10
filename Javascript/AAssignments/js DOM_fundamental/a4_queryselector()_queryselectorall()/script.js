// ---------------question 1------------------------
/*
const query=document.querySelector("h1");
console.log(query.textContent);

const query1=document.querySelector(".announcement");
console.log(query1.textContent);

const query2=document.querySelector("#courseInfo");
console.log(query2.textContent);

const query3=document.querySelector(".missing");
console.log(query3);
*/

// -------------------------question 2----------
console.log(document.querySelector("h2").innerText);

 const list=document.querySelectorAll(".course");
 list.forEach(function(list)
{
    console.log(list.textContent);
});
console.log("number of courses:"+list.length);

const result=document.querySelectorAll(".unavailable");
console.log(result.length);

// queryselector() method return  only one first matching element while,
//  queryselectorall() method returns all mathcing element.  

