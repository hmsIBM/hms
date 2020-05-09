import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlapComponent } from './overlap.component';

describe('OverlapComponent', () => {
  let component: OverlapComponent;
  let fixture: ComponentFixture<OverlapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
