
import { FormArray, FormControl, FormGroup } from '@angular/forms';



export class Validacoes {

      static equalsTo(outroCampo: string){
        const validador = (formControl: FormControl) => {
          if(outroCampo == null){
            throw new Error('É necessario informar um campo.')
          }
          const campo = (<FormGroup>formControl.root).get(outroCampo);
          if (!campo){
            throw new Error('É necessario informar um campo valido.')
          }
          if(campo !== formControl.value){
            return {
              equalsTo: outroCampo
            };
          }
          return null;
        };
        return validador;
      }
      
    static validarCpf(cpf) {
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
}

