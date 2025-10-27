import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveApproachComponent } from './reactive-approach.component';

describe('ReactiveApproachComponent', () => {
  let component: ReactiveApproachComponent;
  let fixture: ComponentFixture<ReactiveApproachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveApproachComponent]
    });
    fixture = TestBed.createComponent(ReactiveApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
