import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerindexComponent } from './buyerindex.component';

describe('BuyerindexComponent', () => {
  let component: BuyerindexComponent;
  let fixture: ComponentFixture<BuyerindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
