import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilContent } from './acceuil-content';

describe('AcceuilContent', () => {
  let component: AcceuilContent;
  let fixture: ComponentFixture<AcceuilContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceuilContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
