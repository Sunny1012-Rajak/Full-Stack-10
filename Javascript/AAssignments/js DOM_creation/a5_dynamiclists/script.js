// ------------------question 1--------------
const array=["Aarav", "Sneha", "Kabir", "Ananya", "Rohan", "Meera"];
const listt=document.getElementById("studentList");
array.forEach(function(list)
{
   const lists=document.createElement("li");
   lists.textContent=list;

    listt.append(lists);
});
// ----------------question 2-------------
const array1=[
    "Attend the programming lecture",
"Complete the coding practice",
"Revise the class notes",
"Submit the assignment",
"Prepare for the knowledge check",
];
const ollist=document.getElementById("taskList");
array1.forEach(function(olst)
{
    const ans=document.createElement("li");
    ans.textContent=olst;
    ollist.append(ans);
})