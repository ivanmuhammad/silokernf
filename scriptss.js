var selectedRow = null;
var count = 0;

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }

    resetForm();
}

function readFormData() {
    var formData = {
        compName: document.getElementById("compNames").value,
        subName: document.getElementById("subNames").value,
        contName: document.getElementById("contNames").value,
        Email: document.getElementById("mail").value,
        DOB: document.getElementById("dob").value,
        WEB: document.getElementById("web").value,
    };
    return formData;
}

function rand() {
    return count += 1;
}

function insertNewRecord(data) {
    var table = document.getElementById("contentTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    //studentID
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = rand();

    //student values
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.compName;

    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.subName;

    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.contName;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.Email;

    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.DOB;

    cell6 = newRow.insertCell(6);
    cell6.innerHTML = data.WEB;

    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a class="btn btn-primary" onClick ="onDetail(this)">Details</a>
                        <a class="btn btn-warning" onClick="onEdit(this)">Edit</a>
                        <a class="btn btn-danger" onClick ="onDelete(this)">Delete</a>`;
}

//resetform values

function resetForm() {
    document.getElementById("compNames").value = "";
    document.getElementById("subNames").value = "";
    document.getElementById("contNames").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("web").value = "";
    selectedRow = null;
}

function onDetail(td) {
    $('#modal').modal('show'); 
                 //rIndex = this.rowIndex;
        selectedRow = td.parentElement.parentElement;
        document.getElementById("tanggal").value = selectedRow.cells[1].innerHTML;
        document.getElementById("company").value = selectedRow.cells[2].innerHTML;
        document.getElementById("nama").value = selectedRow.cells[3].innerHTML;
        document.getElementById("emailTac").value = selectedRow.cells[4].innerHTML;
        document.getElementById("desc").value = selectedRow.cells[5].innerHTML;
        document.getElementById("telp").value = selectedRow.cells[6].innerHTML;        
}

function onEdit(td) {
    $('#exampleModal').modal('show'); 
    selectedRow = td.parentElement.parentElement;
    document.getElementById("date").value = selectedRow.cells[1].innerHTML;
    document.getElementById("compNames").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contNames").value = selectedRow.cells[3].innerHTML;
    document.getElementById("mail").value = selectedRow.cells[4].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[5].innerHTML;
    document.getElementById("web").value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.date;
    selectedRow.cells[2].innerHTML = formData.compName;
    selectedRow.cells[3].innerHTML = formData.contName;
    selectedRow.cells[4].innerHTML = formData.Email;
    selectedRow.cells[5].innerHTML = formData.DOB;
    selectedRow.cells[6].innerHTML = formData.WEB;
}

function onDelete(td) {
    if (confirm('Anda Yakin Menghapus Data Yang Anda Pilih ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("contentTable").deleteRow(row.rowIndex);
        resetForm();
    }
}