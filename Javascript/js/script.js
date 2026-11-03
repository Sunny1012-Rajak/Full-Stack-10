
let passwords = JSON.parse(localStorage.getItem("passwords")) ;

let editIndex = -1;


function openForm() {
    document.getElementById("formBox").style.display = "block";
}


function closeForm() {
    document.getElementById("formBox").style.display = "none";

    document.getElementById("website").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    editIndex = -1;
    document.getElementById("formTitle").innerText = "Add New Password";
}

function savePassword() {

    let website = document.getElementById("website").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    if (!website || !username || !password) {
        alert("Please fill all fields!");
        return;
    }

    let data = {
        website: website,
        username: username,
        password: password,
        visible: false
    };

    if (editIndex === -1) {
        passwords.push(data);
    } else {
        passwords[editIndex] = data;
    }

    localStorage.setItem("passwords", JSON.stringify(passwords));

    closeForm();
    displayPasswords();
}


function displayPasswords(data = passwords) {

    let list = document.getElementById("passwordList");

    list.innerHTML = "";

    document.getElementById("emptyMessage").style.display =
        data.length === 0 ? "block" : "none";

    data.forEach((item) => {

        let index = passwords.indexOf(item);

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${escapeHTML(item.website)}</td>

            <td>${escapeHTML(item.username)}</td>

            <td>
                <span class="password-text">
                    ${item.visible ? escapeHTML(item.password) : "••••••••"}
                </span>

                <button class="show-btn"
                onclick="togglePassword(${index})">
                    ${item.visible ? "🙈" : "👁"}
                </button>
            </td>

            <td>
                <button class="edit-btn"
                onclick="editPassword(${index})">
                    Edit
                </button>

                <button class="delete-btn"
                onclick="deletePassword(${index})">
                    Delete
                </button>
            </td>
        `;

        list.appendChild(row);
    });
}


function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}


function togglePassword(index) {

    passwords[index].visible = !passwords[index].visible;

    displayPasswords();
}


function editPassword(index) {

    let item = passwords[index];

    document.getElementById("website").value = item.website;
    document.getElementById("username").value = item.username;
    document.getElementById("password").value = item.password;

    editIndex = index;

    document.getElementById("formTitle").innerText = "Edit Password";

    openForm();
}


function deletePassword(index) {

    let confirmDelete = confirm("Are you sure you want to delete?");

    if (confirmDelete) {

        passwords.splice(index, 1);

        localStorage.setItem("passwords", JSON.stringify(passwords));

        displayPasswords();
    }
}


function searchPasswords() {

    let searchValue = document.getElementById("search")
        .value.toLowerCase();

    let filtered = passwords.filter(item =>
        item.website.toLowerCase().includes(searchValue)
    );

    displayPasswords(filtered);
}

document.getElementById("search").addEventListener("input", searchPasswords);

displayPasswords();
