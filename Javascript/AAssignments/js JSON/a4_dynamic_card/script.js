// -------------------question 1 -----------------

const container = document.getElementById("courseContainer");

function dynamicdard(title, description, duration) {
    const uicard = document.createElement("div");
    uicard.classList.add("coursecard");

    const heading = document.createElement("h2");
    heading.textContent = title;

    const para = document.createElement("p");
    para.textContent = description;

    const another = document.createElement("p");
    another.textContent = duration;

    uicard.append(heading, para, another);
    container.append(uicard);
};

dynamicdard(
    "html fundamentals",
    "this is the html fundamentals",
    "time duraiton is: 2 weeks"
);

dynamicdard(
    "javascript fundamnetals",
    "this is the java script fundamentals",
    "time duration is: 4 weeks",
);

dynamicdard(
    "React development",
    "this is the react development",
    "time duration is: 3 weeks",
);

// ----------------quesiton 2---------------------------------------
const cards=document.getElementById("studentContainer");

function student(name,course,learningstatus)
{
    const list=document.createElement("div");
    list.classList.add("student-card");

    const names=document.createElement("h3");
    names.textContent=name;

    const courses=document.createElement("p");
    courses.textContent=course;

    const learnstatus=document.createElement("p");
    learnstatus.textContent=learningstatus;

    list.append(names,courses,learnstatus);
    cards.append(list);
};

student(
    "name: sunnny rajak",
    "course: web development",
    "learningstatus: good"
);

student(
    "name: rahul verma",
    "course: data analytics",
    "leraningstatus: excellent",
);
student(
  
    "name: shruti oberoy",
    "course: java dsa",
    "leraningstatus: good", 
);
student(
    "name: adarsh tiwari",
    "course: python",
    "leraningstatus: good", 
);