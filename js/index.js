function CreateAlert(type, message) {
    $(".alerts").html(
        `<div class="alert alert-${type} alert-dismissible fade show" role="alert">${message}<div type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></div></div>`
    );
}

function CreateEntry(text, checked) {
    if (text == "") {
        CreateAlert("danger", "Please enter a todo");
        return;
    }

    return `<li class="list-group-item ${
        checked && "bg-success"
    }" id="todo-item"><div class="btn btn-close" id="btn-todo" aria-label="Close" role="button"></div><i class="displaynone bi-check text-success" id="btn-check" aria-label="Check">
    </i>${text}</li>`;
}

function CreateAlertWithRedirect(type, message, redirect) {
    CreateAlert(type, message);
    setTimeout(() => {
        window.location.href = redirect;
    }, 1500);
}

function Redirect(redirect) {
    setTimeout(() => {
        window.location.href = redirect;
    }, 1500);
}

// for (let index = 0; index < localStorage.length; index++) {
//     console.log(localStorage.key(index));
// }
