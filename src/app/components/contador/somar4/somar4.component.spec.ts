import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Somar4Component } from './somar4.component';

describe('Somar4Component', () => {
  let component: Somar4Component;
  let fixture: ComponentFixture<Somar4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Somar4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Somar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
