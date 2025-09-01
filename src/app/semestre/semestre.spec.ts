import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semestre } from './semestre';

describe('Semestre', () => {
  let component: Semestre;
  let fixture: ComponentFixture<Semestre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Semestre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semestre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
