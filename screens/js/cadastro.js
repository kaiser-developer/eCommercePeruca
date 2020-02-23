 let inputSenha = document.getElementById('input-senha');
 let inputConfirm = document.getElementById('input-confirme-senha');

inputConfirm.addEventListener("keyup", (e) => {
    if (inputConfirm.value != inputSenha.value) {
        inputConfirm.setAttribute("class", "form-control is-invalid");
    } else {
        inputConfirm.setAttribute("class", "form-control is-valid");
    }

})




