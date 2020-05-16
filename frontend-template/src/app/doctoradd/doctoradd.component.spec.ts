import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoraddComponent } from './doctoradd.component';

describe('DoctoraddComponent', () => {
  let component: DoctoraddComponent;
  let fixture: ComponentFixture<DoctoraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
