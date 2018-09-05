import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartcountsComponent } from './partcounts.component';

describe('PartcountsComponent', () => {
  let component: PartcountsComponent;
  let fixture: ComponentFixture<PartcountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartcountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartcountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
