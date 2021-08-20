import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackShackComponent } from './snack-shack.component';

describe('SnackShackComponent', () => {
  let component: SnackShackComponent;
  let fixture: ComponentFixture<SnackShackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackShackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackShackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
