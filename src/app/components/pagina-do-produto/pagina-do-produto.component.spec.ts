import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDoProdutoComponent } from './pagina-do-produto.component';

describe('PaginaDoProdutoComponent', () => {
  let component: PaginaDoProdutoComponent;
  let fixture: ComponentFixture<PaginaDoProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaDoProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
