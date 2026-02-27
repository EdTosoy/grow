import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminTouchpoints } from './admin-touchpoints';

describe('AdminTouchpoints', () => {
  let component: AdminTouchpoints;
  let fixture: ComponentFixture<AdminTouchpoints>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTouchpoints],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTouchpoints);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
