import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerindexComponent } from './sellerindex.component';

describe('SellerindexComponent', () => {
  let component: SellerindexComponent;
  let fixture: ComponentFixture<SellerindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
