
const checkdata = document.getElementById("form");

checkdata.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("username").value;
/*
    const isValid = false;

    if (name.length === 0) {
        isValid = false;
    }

    for (let i = 0; i < name.length; i++) {

        if (((name[i] >= 'A' && name[i] <= 'Z') ||
              (name[i] >= 'a' && name[i] <= 'z'))) {

            isValid = true;
            break;
        }
    }

    console.log(isValid ? 'Valid' : 'Invalid');
*/
if(/^[A-Za-z]+$/ ==name)
{
    console.log(name.test("valid"));
}
else
{
    console.log(name.test("invalid"));
    
}
});
