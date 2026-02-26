import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Touchpoints } from './touchpoints';

describe('Touchpoints', () => {
  let component: Touchpoints;
  let fixture: ComponentFixture<Touchpoints>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Touchpoints],
    }).compileComponents();

    fixture = TestBed.createComponent(Touchpoints);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
