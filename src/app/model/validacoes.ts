import { Endereco } from './endereco';
import { Cliente } from './cliente';

export class Validacoes {
    cancelarLetras(event: any) {
        let evento = event;
        let key = evento.keyCode || evento.which;
        key = String.fromCharCode(key);
        //let regex = /^[0-9.,]+$/;
        let regex = /^[0-9]+$/;
        if (!regex.test(key)) {
            evento.returnValue = false;
            if (evento.preventDefault) evento.preventDefault();
        }
    }

    cancelarNumeros(event: any) {
        let evento = event;
        let key = evento.keyCode || evento.which;
        key = String.fromCharCode(key);
        //let regex = /^[0-9.,]+$/;
        let regex = /^[a-z A-Z]+$/;
        if (!regex.test(key)) {
            evento.returnValue = false;
            if (evento.preventDefault) evento.preventDefault();
        }
    }

    verificarEndereco(endereco: Endereco) {
        if (endereco.bairro.replace(/\ /g, '').length < 10 || endereco.cep.length != 8 ||
            endereco.destinatario.replace(/\ /g, '').length < 10 || endereco.localidade.replace(/\ /g, '').length < 10 ||
            (endereco.numero == 0 || endereco.numero == undefined) || endereco.logradouro.replace(/\ /g, '').length < 6 ||
            endereco.uf == "") {
            return true;
        }
        return false;
    }

    verificarDadosPagamento(dadosPagamento) {
        if (dadosPagamento.numeroCartao.length == 16 && (dadosPagamento.dataValidade != null &&
            dadosPagamento.dataValidade.length != 0) && dadosPagamento.cvv.length == 3 &&
            dadosPagamento.nomeTitular.replace(/\ /g, '').length > 8 && this.validarCpf(dadosPagamento.cpf)){
                return true;
        }
        return false;
    }

    validarCpf(cpf) {
        let soma;
        let resto;
        soma = 0;
        if (cpf == "00000000000") return false;

        for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) resto = 0;
        if (resto != parseInt(cpf.substring(9, 10))) return false;

        soma = 0;
        for (var i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) resto = 0;
        if (resto != parseInt(cpf.substring(10, 11))) return false;
        return true;
    }

    validarSenha(senha: string){
        if(senha.length > 8 && /\d/.test(senha) && /[a-z]/.test(senha)){
            return true;
        }
        return false;
    }

    verificarDadosCliente(cliente: Cliente){
        if(this.validarCpf(cliente.cpf) && cliente.email.replace(/\ /g, '').length > 12 &&
        cliente.nome.replace(/\ /g, '').length > 8 && this.validarSenha(cliente.senha) &&
        cliente.tel.length > 9){
            return true;
        }
        return false;
    }
}
