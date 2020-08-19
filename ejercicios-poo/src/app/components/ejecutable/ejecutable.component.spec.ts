import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutableComponent } from './ejecutable.component';

describe('EjecutableComponent', () => {
  let component: EjecutableComponent;
  let fixture: ComponentFixture<EjecutableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
