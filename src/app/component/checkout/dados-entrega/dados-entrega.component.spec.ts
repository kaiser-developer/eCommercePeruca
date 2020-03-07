import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosEntregaComponent } from './dados-entrega.component';

describe('DadosEntregaComponent', () => {
  let component: DadosEntregaComponent;
  let fixture: ComponentFixture<DadosEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
