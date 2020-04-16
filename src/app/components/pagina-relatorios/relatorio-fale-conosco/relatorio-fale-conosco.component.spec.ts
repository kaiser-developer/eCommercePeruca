import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioFaleConoscoComponent } from './relatorio-fale-conosco.component';

describe('RelatorioFaleConoscoComponent', () => {
  let component: RelatorioFaleConoscoComponent;
  let fixture: ComponentFixture<RelatorioFaleConoscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioFaleConoscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioFaleConoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
