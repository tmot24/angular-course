import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyRoute } from './empty-route';

describe('EmptyRoute', () => {
  let component: EmptyRoute;
  let fixture: ComponentFixture<EmptyRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyRoute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
