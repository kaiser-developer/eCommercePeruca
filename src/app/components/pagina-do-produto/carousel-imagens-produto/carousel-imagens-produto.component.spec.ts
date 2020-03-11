import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselImagensProdutoComponent } from './carousel-imagens-produto.component';

describe('CarouselImagensProdutoComponent', () => {
  let component: CarouselImagensProdutoComponent;
  let fixture: ComponentFixture<CarouselImagensProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselImagensProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselImagensProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
