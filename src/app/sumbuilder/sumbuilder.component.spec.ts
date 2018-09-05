import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumbuilderComponent } from './sumbuilder.component';

describe('SumbuilderComponent', () => {
  let component: SumbuilderComponent;
  let fixture: ComponentFixture<SumbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
