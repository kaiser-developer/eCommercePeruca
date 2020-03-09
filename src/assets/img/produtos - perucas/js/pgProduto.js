let inputCep = document.getElementById("cep");
let cepValido = document.getElementById("cep-valido");


inputCep.onkeyup = () => {
    if(inputCep.value.length == 9){
        fetch('https://viacep.com.br/ws/'+inputCep.value.replace(/\-/g, '')+'/json/').then((resposta) =>{
            return resposta.json();
        }).then((valor) => {
            if(valor.erro){
                inputCep.classList.add("is-invalid");
                cepValido.value = false;
            }else{
                inputBairro.value = valor.bairro;
                inputEndereco.value = valor.logradouro;
                inputCidade.value = valor.localidade;
                selectEstado.value = valor.uf;
                cepValido.value = true;
                inputCep.classList.add("is-valid");
            }
        })
    }else{
        cepValido.value = false;
        inputBairro.value = "";
        inputEndereco.value = "";
        inputCidade.value = "";
        selectEstado.value = "";
        inputCep.classList.remove("is-invalid");
        inputCep.classList.remove("is-valid");
    }
}
