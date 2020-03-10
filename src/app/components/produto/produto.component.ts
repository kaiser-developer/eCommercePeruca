import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor() { }

  imagens = [];

  ngOnInit(): void {
    this.imagens.push({imagem: "../../../assets/images/produtos - perucas/000 - frente.jpg", pos: 0, classe: true},
    {imagem: "../../../assets/images/produtos - perucas/000 - lateral.jpg", pos: 1, classe: false},
    {imagem: "../../../assets/images/produtos - perucas/000 - verso.jpg", pos: 2, classe: false});
    
  }

  mudar(imagem){
    imagem.classe = false;
    if(imagem.pos == this.imagens.length-1){
      this.imagens[0].classe = true;
    }else{
      let pos = this.imagens.indexOf(imagem);
      this.imagens[pos+1].classe = true;
    }
  }
}
