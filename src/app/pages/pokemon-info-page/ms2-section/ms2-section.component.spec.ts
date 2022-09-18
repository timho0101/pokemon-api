import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ms2SectionComponent } from './ms2-section.component';

describe('Ms2SectionComponent', () => {
  let component: Ms2SectionComponent;
  let fixture: ComponentFixture<Ms2SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ms2SectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ms2SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
