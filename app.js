var list = document.getElementById("list");

    function addtodo() {
        var todo_item = document.getElementById("to-doitem");

        // Check if the input is empty
        if (todo_item.value.trim() === '') {
            alert('Please enter a task');
            return;
        }

        // Create list item
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(todo_item.value));

        // Create Delete Button
        var deleteButton = document.createElement("button");
        var deltext = document.createTextNode("Delete");
        deleteButton.setAttribute("onclick", "deleteitems(this)");
        deleteButton.appendChild(deltext);
        li.appendChild(deleteButton);

        // Create Edit Button
        var editButton = document.createElement("button");
        var editText = document.createTextNode("Edit");
        editButton.setAttribute("onclick", "editItems(this)");
        editButton.appendChild(editText);
        li.appendChild(editButton);

        // Append list item to the list
        list.appendChild(li);

        // Clear the input field
        todo_item.value = '';
    }

    function deleteitems(e) {
        e.parentNode.remove();
    }

    function editItems(e) {
        var value = e.parentNode.firstChild.nodeValue;
        var editedValue = prompt("Enter new value", value);

        // Check if the user entered a value
        if (editedValue.trim() !== '') {
            e.parentNode.firstChild.nodeValue = editedValue;
        }
    }

    function deleteall() {
        list.innerHTML = "";
    }