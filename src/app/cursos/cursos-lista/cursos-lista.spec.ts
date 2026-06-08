import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosLista } from './cursos-lista';

describe('CursosLista', () => {
  let component: CursosLista;
  let fixture: ComponentFixture<CursosLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosLista],
    }).compileComponents();

    fixture = TestBed.createComponent(CursosLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
