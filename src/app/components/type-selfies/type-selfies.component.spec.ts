import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSelfiesComponent } from './type-selfies.component';

describe('TypeSelfiesComponent', () => {
  let component: TypeSelfiesComponent;
  let fixture: ComponentFixture<TypeSelfiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeSelfiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSelfiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
