import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCollectionsComponent } from './movies-collections.component';

describe('MoviesCollectionsComponent', () => {
  let component: MoviesCollectionsComponent;
  let fixture: ComponentFixture<MoviesCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
