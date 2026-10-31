const studentdata = [
    {
        name: "sumit",
        branch: "aids",
        rollno: 55,
        project: [{ project1: "sevasetuai", timeline: "40hrs", start: "october" }],
    },
    {
        name: "mahi",
        branch: "aids",
        rollno: 26,
        project: [
            { project1: "sevasetuai", timeline: "40hrs", start: "october" },
            { project2: "reccomendationsystem", timeline: "90hrs", start: "december" },
            { project3: "lms", timeline: "30hrs", start: "february" },
        ]
    },
    {
        name: "tarun",
        branch: "aids",
        rollno: 59,
        project: [
            { project1: "sevasetuai", timeline: "40hrs", start: "october" },
            { project2: "reccomendationsystem", timeline: "90hrs", start: "december" },
        ]
    },
];

console.log(studentdata[0]);


studentdata[2].project[1].start = "november";
console.log(studentdata[2]);

delete studentdata[1].project;
console.log(studentdata[1]);

// ----------------------JSON parse ()  and JSON stringify()--------------

const json= {
        name: "sumit",
        branch: "aids",
        rollno: 55,
        project: [{ project1: "sevasetuai", timeline: "40hrs", start: "october" }],
    };
console.log(JSON.stringify(json));

/*
const json1= {
        "name": "sumit",
        "branch": "aids",
        "rollno": "55",
    //    " project": [{ "project1": "sevasetuai", "timeline": "40hrs", "start": "october" }],
    };
    const ans=JSON.parse(json1)
    console.log(ans);
*/
    // ------------------------template litrels--------------------------

let stdname="mahi"
let marks=45;
console.log(`student maks ${stdname} score ${marks}`);

// -------------------------
    

