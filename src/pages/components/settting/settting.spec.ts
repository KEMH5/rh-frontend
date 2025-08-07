import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Settting } from './settting';

describe('Settting', () => {
  let component: Settting;
  let fixture: ComponentFixture<Settting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Settting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Settting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
