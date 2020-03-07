import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {


frete = document.getElementById('frete');

  constructor() { }


  

//   numero.addEventListener('keyup', (event) => {
//     if (isNaN(numero.value)) {
//         numero.value = numero.value.substring(0, (numero.value.length - 1));
//     }

//     if (numero.value.length >= 5) {
//         numero.value = numero.value.substring(0, 5)
//     }
// })

  ngOnInit(): void {
  }

}
