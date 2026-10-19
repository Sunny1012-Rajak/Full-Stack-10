// const hdg=document.createElement("h2");
// const para=document.createElement("p");
// const btn=document.createElement("button");

// hdg.classList.add("text-info");
// hdg.textContent="sub heading";
// const div=document.getElementById("task1");
// div.appendChild(hdg);

// para.textContent="hello! ricr ,I am a full stack developer.";
// div.appendChild(para);

// btn.classList.add("btn1" ,"btn-primary");
// btn.innerText="submit";
// div.appendChild(btn);

// ------------------------remove() ->use to remove any content --------------------
//  const ad=document.getElementById("task1");
//  ad.remove();

const ar=["mahi","raj","aws","dgskf","nljdfan"];

const list=document.createElement("ol");
ar.forEach((item)=>
{
    const l=document.createElement("li");
    l.textContent=item;
    list.appendChild(l);
});
document.getElementById("mylist").appendChild(list);

// ---------------------------------------------------------------
