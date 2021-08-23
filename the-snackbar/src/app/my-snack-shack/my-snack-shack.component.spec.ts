import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySnackShackComponent } from './my-snack-shack.component';

describe('MySnackShackComponent', () => {
  let component: MySnackShackComponent;
  let fixture: ComponentFixture<MySnackShackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySnackShackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySnackShackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
