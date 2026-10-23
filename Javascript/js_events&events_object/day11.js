function showalert()
{
    alert("click by html events");
}

document.getElementById("clickbtn").addEventListener("click",showalert1);


function showalert1()
{
    alert("clickk by js events");
}


document.getElementById("box1").addEventListener("click",()=>{
    document.getElementById("box1").innerText="the text was  changed by singleclick";
}
);
document.getElementById("box2").addEventListener("mousmove",()=>{
    document.getElementById("box2").innerText="the text was  changed by mousemove";
}
);
document.getElementById("box3").addEventListener("mousedown",()=>{
    document.getElementById("box3").innerText="the text was  changed by mousedown";
}
);
document.getElementById("box4").addEventListener("mouseenter",()=>{
    document.getElementById("box4").innerText="the text was  changed by mouseeneter";
}
);
document.getElementById("box5").addEventListener("mouseleave",()=>{
    document.getElementById("box5").innerText="the text was  changed by mouseleave";
}
);
document.getElementById("box6").addEventListener("mouseout",()=>{
    document.getElementById("box6").innerText="the text was  changed by mouseout";
}
);
document.getElementById("box7").addEventListener("mouseover",()=>{
    document.getElementById("box7").innerText="the text was  changed  by mouseover";
}
);
document.getElementById("box8").addEventListener("mouseup",()=>{
    document.getElementById("box8").innerText="the text was changed by mouseup";
}
);
document.getElementById("box9").addEventListener("dblclick",()=>{
    document.getElementById("box9").innerText="the text was changed by dblclick";
}
);



