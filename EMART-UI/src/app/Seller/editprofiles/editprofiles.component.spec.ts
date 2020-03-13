import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilesComponent } from './editprofiles.component';

describe('EditprofilesComponent', () => {
  let component: EditprofilesComponent;
  let fixture: ComponentFixture<EditprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
