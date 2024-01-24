import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddclassPage } from './addclass.page';

describe('AddclassPage', () => {
  let component: AddclassPage;
  let fixture: ComponentFixture<AddclassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
