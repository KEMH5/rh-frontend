import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationAccount } from './activation-account';

describe('ActivationAccount', () => {
  let component: ActivationAccount;
  let fixture: ComponentFixture<ActivationAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivationAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivationAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
