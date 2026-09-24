const API = "http://localhost:3001";

function displayForm(show, hideOne, hideTwo, hideThree) {
  document.getElementsByClassName(show)[0].style.display = "block";
  document.getElementsByClassName(hideOne)[0].style.display = "none";
  document.getElementsByClassName(hideTwo)[0].style.display = "none";
  document.getElementsByClassName(hideThree)[0].style.display = "none";
}

// Text coming back from the database is inserted with innerHTML below, so it
// has to be escaped first — otherwise a name like <img onerror=...> would run.
function escapeHtml(value) {
  if (value === null || value === undefined) return "—";

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function addCustomer(e) {
  e.preventDefault();

  const form = document.getElementById("newForm");

  fetch(`${API}/insert-customers-info`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      address: document.getElementById("address").value,
      company: document.getElementById("company").value,
    }),
  })
    .then((response) => response.text().then((text) => ({ response, text })))
    .then(({ response, text }) => {
      if (!response.ok) throw new Error(text);

      alert("Customer added!");
      form.reset();
    })
    .catch((err) => alert(`Could not add the customer: ${err.message}`));
}

document.getElementById("newForm").addEventListener("submit", addCustomer);

function editName(e) {
  e.preventDefault();

  const form = document.getElementById("myForm");

  fetch(`${API}/update`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: document.querySelector("#myForm input[name=id]").value,
      newName: document.querySelector("input[name=updatedName]").value,
    }),
  })
    .then((response) => response.json().then((data) => ({ response, data })))
    .then(({ response, data }) => {
      // Only say it worked once the server has actually confirmed it.
      if (!response.ok) throw new Error(data.message);

      alert("Name Updated!");
      form.reset();
    })
    .catch((err) => alert(`Could not update the name: ${err.message}`));
}

document.getElementById("myForm").addEventListener("submit", editName);

function deleteUser(e) {
  e.preventDefault();

  const form = document.getElementById("delete-user");
  const deleteBox = document.querySelector("#delete-user input[name=id]");
  const deleteID = deleteBox.value;

  if (isNaN(deleteID) || deleteID.length == 0) {
    deleteBox.style.backgroundColor = "pink";
    deleteBox.style.border = "red 2px solid";
    alert("Please enter number values only");
    return;
  }

  deleteBox.style.backgroundColor = "";
  deleteBox.style.border = "";

  fetch(`${API}/remove-user`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ id: deleteID }),
  })
    .then((response) => response.json().then((data) => ({ response, data })))
    .then(({ response, data }) => {
      // The alert used to fire before this response arrived, so it said
      // "User Deleted!" even when the delete had failed.
      if (!response.ok) throw new Error(data.message);

      alert("User Deleted!");
      form.reset();
    })
    .catch((err) => alert(`Could not delete the user: ${err.message}`));
}

document.getElementById("delete-user").addEventListener("submit", deleteUser);

function listCustomers() {
  const usersDiv = document.getElementById("data");

  fetch(`${API}/customers`)
    .then((res) => res.json())
    .then((data) => {
      // Add a header for the list
      let html = `
            <div class="row font-weight-bold mb-2">
                <div class="col-2">ID</div>
                <div class="col-4">Name</div>
                <div class="col-3">Address</div>
                <div class="col-3">Company</div>
            </div>
            <hr>
        `;

      // Build the rows in one string, then write to the page once, instead of
      // re-parsing the whole list on every loop with innerHTML +=.
      data.forEach((customer) => {
        html += `
            <div class="row py-2 align-items-center border-bottom">
                <div class="col-2">${escapeHtml(customer.id)}</div>
                <div class="col-4">${escapeHtml(customer.name)}</div>
                <div class="col-3">${escapeHtml(customer.address)}</div>
                <div class="col-3">${escapeHtml(customer.company)}</div>
            </div>`;
      });

      usersDiv.innerHTML = html;
    })
    .catch(() => {
      usersDiv.innerHTML = `<p class="text-danger">Could not load the customers. Is the server running?</p>`;
    });
}

document.getElementById("list").addEventListener("click", listCustomers);
