import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ms1SectionComponent } from './ms1-section.component';

describe('Ms1SectionComponent', () => {
  let component: Ms1SectionComponent;
  let fixture: ComponentFixture<Ms1SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ms1SectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ms1SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
