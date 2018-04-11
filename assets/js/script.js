var rIndex,
    table = document.getElementById("table");

//check if empty
function checkEmptyRow() {
    var isEmpty = false,
        image = document.getElementById("image").src,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        tel = document.getElementById("tel").value,
        email = document.getElementById("email").value;

    if(image === ""){
        alert("Image Required");
        isEmpty = true;
    } else if(fname === ""){
        alert("First Name Required");
        isEmpty = true;
    } else if(lname === ""){
        alert("Last Name Required");
        isEmpty = true;
    } else if(tel === ""){
        alert("Phone Number Required");
        isEmpty = true;
    }else if(email === ""){
        alert("Email Address Required");
        isEmpty = true;
    }
    return isEmpty;
}

function readURL(input){
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            $('#blah').attr('src',e.target.result).width(150).height(200);
            reader.readAsDataURL(input.files[0]);
        }
    }

}


function addRowToTable() {

    //get the element by id
    //create a new row and cells
    //get value from input
    //set the value into the row cells
if(!checkEmptyRow()) {
    var table = document.getElementById("table"),
        newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),

        image = document.getElementById("image").src,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        tel = document.getElementById("tel").value,
        email = document.getElementById("email").value;

    cell1.innerHTML = image;
    cell2.innerHTML = fname;
    cell3.innerHTML = lname;
    cell4.innerHTML = tel;
    cell5.innerHTML = email;

    //call the function to set the event to the new row
    selectedRowToInput();
}
}

//display selected row into input for editing
function selectedRowToInput() {

    for(var i = 0; i < table.rows.length; i++){
        table.rows[i].onclick = function() {
            //get the selected row index
            rIndex = this.rowIndex;
            document.getElementById("image").value = this.cells[0].innerHTML;
            document.getElementById("fname").value = this.cells[1].innerHTML;
            document.getElementById("lname").value = this.cells[2].innerHTML;
            document.getElementById("tel").value = this.cells[3].innerHTML;
            document.getElementById("email").value = this.cells[4].innerHTML;
        };
    }
}
selectedRowToInput();

function editSelectedRow() {
    var image = document.getElementById("image").src,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        tel = document.getElementById("tel").value,
        email = document.getElementById("email").value;

    if (!checkEmptyRow()) {
        table.rows[rIndex].cells[0].innerHTML = image;
        table.rows[rIndex].cells[1].innerHTML = fname;
        table.rows[rIndex].cells[2].innerHTML = lname;
        table.rows[rIndex].cells[3].innerHTML = tel;
        table.rows[rIndex].cells[4].innerHTML = email;
    }
}

function removeSelectedRow() {
    table.deleteRow(rIndex);
    //clear input text
    document.getElementById("image").src = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("email").value = "";

}