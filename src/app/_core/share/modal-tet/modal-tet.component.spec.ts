import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTetComponent } from './modal-tet.component';

describe('ModalTetComponent', () => {
  let component: ModalTetComponent;
  let fixture: ComponentFixture<ModalTetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
