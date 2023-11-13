function CreateAlert(type, message) {
    $(".alerts").html(
        `<div class="alert alert-${type} alert-dismissible fade show" role="alert">${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
    );
}

function CreateEnty(text, checked) {
    if (text == "") {
        CreateAlert("danger", "Please enter a todo");
        return;
    }

    return `<li class="list-group-item ${
        checked && "bg-success"
    }" id="todo-item"><button class="btn btn-danger btn-close" id="btn-todo"aria-label="Close" role="button"></button>${text}</li>`;
}

function CreateAlertWithRedirect(type, message, redirect) {
    CreateAlert(type, message);
    setTimeout(() => {
        window.location.href = redirect;
    }, 1500);
}

// for (let index = 0; index < localStorage.length; index++) {
//     console.log(localStorage.key(index));
// }
