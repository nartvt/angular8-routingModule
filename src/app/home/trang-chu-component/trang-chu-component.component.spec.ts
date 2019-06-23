import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangChuComponentComponent } from './trang-chu-component.component';

describe('TrangChuComponentComponent', () => {
  let component: TrangChuComponentComponent;
  let fixture: ComponentFixture<TrangChuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangChuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangChuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
