// ------------------------question 1----------------
const fees=[5000, 7500, 6000, 8500, 4000];
const result=fees.reduce((ques,ans)=>
{
    return ques+ans;
},0);
console.log(result);
// --------------------------------------
const result1=fees.reduce((ques,ans)=>
{
    return ques+ans;
},1000);
console.log(result1);
// -------------------------question 2---------------------

const marks=[35, 72, 48, 90, 28, 65, 82];
const result2=marks.reduce((quess,anss)=>
{
    return quess+anss;
},0);
console.log(result2);

const result3=marks.reduce((ques,ans)=>
{
    return ans>=40 ?(ques+1):ques;
},0);
console.log(result3);
// ---------------------------


const result4=marks.reduce((ques,ans)=>
{
    return ans>=75 ?(ques+1):ques;
},0);
console.log(result4);