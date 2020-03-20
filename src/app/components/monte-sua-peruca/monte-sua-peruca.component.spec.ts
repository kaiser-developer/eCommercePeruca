import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonteSuaPerucaComponent } from './monte-sua-peruca.component';

describe('MonteSuaPerucaComponent', () => {
  let component: MonteSuaPerucaComponent;
  let fixture: ComponentFixture<MonteSuaPerucaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonteSuaPerucaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonteSuaPerucaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
