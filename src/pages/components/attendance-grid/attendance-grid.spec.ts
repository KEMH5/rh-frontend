import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceGrid } from './attendance-grid';

describe('AttendanceGrid', () => {
  let component: AttendanceGrid;
  let fixture: ComponentFixture<AttendanceGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
