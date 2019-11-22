import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomSheetComponent } from './buttom-sheet.component';

describe('ButtomSheetComponent', () => {
  let component: ButtomSheetComponent;
  let fixture: ComponentFixture<ButtomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
