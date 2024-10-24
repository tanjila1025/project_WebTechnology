
let data = []; // Array to hold user information
let updateIndex = -1; 

function AddData() {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (!firstName || !lastName || !phone || !email || !address) {
        alert('Please fill in all fields');
        return;
    }

    if (updateIndex === -1) {
        // Add new data
        data.push({ firstName, lastName, phone, email, address });
    } else {
        // Update existing data
        data[updateIndex] = { firstName, lastName, phone, email, address };
        updateIndex = -1; // Reset the index after updating
    }

    showData();
    clearFields();
}

function showData() {
    const tableBody = document.querySelector('#curdTable tbody');
    tableBody.innerHTML = '';

    data.forEach((item, index) => {
        const row = `<tr>
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
            <td>${item.address}</td>
            <td>
                <button class="btn btn-warning" onclick="editData(${index})">Edit</button>
                <button class="btn btn-danger" onclick="deleteData(${index})">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function editData(index) {
    updateIndex = index; // Set the index for updating
    const item = data[index];

    // Fill the input fields with the current data
    document.getElementById('first_name').value = item.firstName;
    document.getElementById('last_name').value = item.lastName;
    document.getElementById('phone').value = item.phone;
    document.getElementById('email').value = item.email;
    document.getElementById('address').value = item.address;

    // Optionally change the button text or behavior to indicate it's an update
    document.getElementById('submit').textContent = "Update Data";
}

function deleteData(index) {
    data.splice(index, 1); // Remove item from array
    showData(); // Refresh the table
}

function clearFields() {
    document.getElementById('first_name').value = '';
    document.getElementById('last_name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';

    // Reset button text back to "Add Data"
    document.getElementById('submit').textContent = "Add Data";
}
