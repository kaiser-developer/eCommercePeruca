 let inputSenha = document.getElementById('senha');
 let inputConfirm = document.getElementById('confirmeSenha')

inputConfirm.addEventListener("keyup", (e) => {
    if (inputConfirm.value != inputSenha.value) {
         inputConfirm.setAttribute("class", "form-control is-invalid")

 } else {
         inputConfirm.setAttribute("class", "form-control is-valid")
     }

 })




