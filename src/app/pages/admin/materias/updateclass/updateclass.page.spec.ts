import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateclassPage } from './updateclass.page';

describe('UpdateclassPage', () => {
  let component: UpdateclassPage;
  let fixture: ComponentFixture<UpdateclassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
