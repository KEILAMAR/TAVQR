import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecPasswordPage } from './rec-password.page';

describe('RecPasswordPage', () => {
  let component: RecPasswordPage;
  let fixture: ComponentFixture<RecPasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
