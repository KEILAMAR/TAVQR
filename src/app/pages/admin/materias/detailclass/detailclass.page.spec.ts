import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailclassPage } from './detailclass.page';

describe('DetailclassPage', () => {
  let component: DetailclassPage;
  let fixture: ComponentFixture<DetailclassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
