import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HomeaPage } from './homea.page';

describe('HomeaPage', () => {
  let component: HomeaPage;
  let fixture: ComponentFixture<HomeaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
