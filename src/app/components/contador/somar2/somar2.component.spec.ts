import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Somar2Component } from './somar2.component';

describe('Somar2Component', () => {
  let component: Somar2Component;
  let fixture: ComponentFixture<Somar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Somar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Somar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
