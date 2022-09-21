import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookHttpComponent } from './edit-book-http.component';

describe('EditBookHttpComponent', () => {
  let component: EditBookHttpComponent;
  let fixture: ComponentFixture<EditBookHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBookHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
