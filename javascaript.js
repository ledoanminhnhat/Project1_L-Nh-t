function themnv() {
   

    var name = document.getElementById('name').value;
    var code = document.getElementById('code').value;
    var workplace = document.getElementById('workplace').value;
    var date = document.getElementById('date').value;

    var nameError = document.getElementById('name-error');
    var codeError = document.getElementById('code-error');
    var workplaceError = document.getElementById('workplace-error');
    var dateError = document.getElementById('date-error');

    // Reset error messages
    nameError.textContent = '';
    codeError.textContent = '';
    workplaceError.textContent = '';
    dateError.textContent = '';

    var isValid = true;

    // Validate Name
    if (name.trim() === '') {
        nameError.textContent = 'Vui lòng nhập tên.';
        isValid = false;
    }

    // Validate Code
    if (code.trim() === '') {
        codeError.textContent = 'Vui lòng nhập MSNV.';
        isValid = false;
    }

    // Validate Workplace
    if (workplace.trim() === '') {
        workplaceError.textContent = 'Vui lòng nhập tên chi nhánh';
        isValid = false;
    }

    // Validate Date
    if (date.trim() === '') {
        dateError.textContent = 'Vui lòng nhập ngày thêm.';
        isValid = false;
    }

    // If all validations pass, you can proceed with further actions
    if (isValid) {
        // Display success message
        alert('Đã thêm nhân viên thành công!\n\nDữ liệu đã nhập:\nTên: ' + name + '\nMã nhân viên: ' + code + '\nNV chi nhánh: ' + workplace + '\nNgày thêm: ' + date);

        // Append the entered data to the container
        appendEnteredData(name, code, workplace, date);

        // Clear the form after successful submission
        document.getElementById('name').value = '';
        document.getElementById('code').value = '';
        document.getElementById('workplace').value = '';
        document.getElementById('date').value = '';
    }

    return false; // Stop form submission


  
}

function appendEnteredData(name, code, workplace, date) {
    var enteredDataBody = document.getElementById('enteredDataBody');
    var newRow = enteredDataBody.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = code;
    cell3.innerHTML = workplace;
    cell4.innerHTML = date;
}


function TimeIn(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes;
    document.getElementById('giovao').value = formattedTime;
}

// Gọi hàm TimeIn khi trang được load
window.onload = TimeIn;




