// ------------------question 1---------
const head=document.createElement("h2");
head.textContent="lets start the web dev";

const con=document.getElementById("announcementBoard");
con.append(head);

const para=document.createElement("p");
para.textContent="Classes begin on Monday.";
con.append(para);

con.append("Registration is now open!");

const data=document.createElement("p");
data.textContent="Contact the institute for details.";
con.appendChild(data);

// ------------------question 2-------------
const para1=document.createElement("p");
para1.textContent="Your assignment is under review.";
 
const anoterdiv=document.getElementById("pendingMessages");
anoterdiv.appendChild(para1);

const anoterdiv1=document.getElementById("processedMessages");
anoterdiv1.append("Please check your dashboard for updates.");

const ans=document.getElementById("studentMessage");
anoterdiv1.appendChild(ans);
