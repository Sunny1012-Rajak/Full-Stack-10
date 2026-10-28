// -------------------------string methods and manipulation-------------------
const studentname =" sunny rajak ";
console.log("starttrim: "+studentname.trimStart());
console.log("endtrim: "+studentname.trimEnd());
console.log("trim: "+studentname.trim());
console.log(studentname.charAt(3));
 console.log(studentname.at(6));
 console.log(studentname.lastIndexOf("sunny"));

const str1="i am learning java";
console.log("touppercase: "+str1.toUpperCase());

const str2="I AM LEARNING JAVA";
console.log("tolowercase: "+str2.toLowerCase());

let coursedescription="we use javascript to interact";
console.log("slice: "+ coursedescription.slice(2,7));
console.log("using at(): "+ coursedescription.at(3));

const str4="rajaksunny@259.com";
console.log("include(): "+str4.includes("@"));
console.log("startwith(): "+str4.startsWith("rajak"));

console.log("endswith: "+str4.endsWith(".com"))

const str5="html is used in webdevelopment";
console.log("replaceall: "+str5.replaceAll("html" ,"javascript"));

const str6="sunny";
const str7="rajak";
console.log(str6+" "+str7);

const str8="java,html,css,react";
console.log("split: "+str8.split(","));