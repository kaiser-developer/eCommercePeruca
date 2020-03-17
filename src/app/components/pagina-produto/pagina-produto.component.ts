import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {

  id;
  @Input() atualizarCarrinhoHeader = new EventEmitter();

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  atualizarCarrinho(){
    this.atualizarCarrinhoHeader.emit();
  }

}
