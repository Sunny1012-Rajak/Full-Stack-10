// ------------------question 1--------------

const course=["react","java","python","c++","cotlin","fluter"];
console.log(course);

 const slice=course.slice(1,4);
console.log("after slicing the element:"+slice);
 const slice1=course.slice(2);
console.log("again slicing the array element: "+slice1);
 const slice2=course.slice(-2,-1);
console.log("after negative slicing: "+slice2);

console.log("----------------------------------------------");

// -------------------------question 2-------------
const city=["bhopal","indore","pune","banglore","gudgaon","harda"];
console.log(city);

const splice=city.splice(1,2);
console.log("splice 2 city :"+splice);

city.splice(1,0,"sehore","nasik");
console.log("add 2 element without removing any element:"+city);

city.splice(1,1,"haryana");
console.log("replace one elment to another :"+city);



