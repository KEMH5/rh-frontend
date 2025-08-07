import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringPart } from './hiring-part';

describe('HiringPart', () => {
  let component: HiringPart;
  let fixture: ComponentFixture<HiringPart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiringPart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringPart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
