import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Driven } from './driven';

describe('Driven', () => {
  let component: Driven;
  let fixture: ComponentFixture<Driven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Driven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Driven);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
