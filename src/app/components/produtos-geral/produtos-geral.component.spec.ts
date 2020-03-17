import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosGeralComponent } from './produtos-geral.component';

describe('ProdutosGeralComponent', () => {
  let component: ProdutosGeralComponent;
  let fixture: ComponentFixture<ProdutosGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
